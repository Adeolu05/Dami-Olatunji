/**
 * Builds src/data/youtubeMessages.json from the YouTube channel.
 *
 * Source of truth is the channel's long-form playlist ("UULF" + channel id without "UC"):
 * YouTube's own list of regular uploads, i.e. the channel's Videos tab. It never contains
 * Shorts or livestreams, so no hashtag/duration guessing is needed.
 *
 * Preferred: YOUTUBE_API_KEY — pages through the whole long-form playlist.
 *
 * Fallback: no API key (or the key is rejected) — the playlist's RSS feed (15 newest videos)
 * is merged into the existing catalog. Older entries are re-checked on their watch page and
 * dropped once they turn private, unlisted, deleted, live or Short. If a check can't be read
 * (network/consent page) the entry is kept as-is, so a bad run never empties the site.
 *
 * Usage: npm run fetch-messages
 *        npm run fetch-messages -- --add VIDEO_ID,VIDEO_ID   (backfill older videos without an API key)
 * Optional: YOUTUBE_CHANNEL_ID=UC...
 */

import { writeFileSync, readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { XMLParser } from 'fast-xml-parser';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT = join(ROOT, 'src', 'data', 'youtubeMessages.json');
const OVERRIDES_PATH = join(ROOT, 'src', 'data', 'youtubeCategoryOverrides.json');
const ENV_PATH = join(ROOT, '.env');

/** Default: @damiolatunji / Herdentity */
const DEFAULT_CHANNEL_ID = 'UCyfEw0p5Rx-oGpyex3RWNTw';

const BROWSER_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36',
  'Accept-Language': 'en-US,en;q=0.9',
  Cookie: 'CONSENT=YES+1',
};

/** Pause between watch-page reads (no-key mode) so YouTube doesn't answer 429. */
const WATCH_PAGE_DELAY_MS = 1500;

/** Keep in sync with CANONICAL_CATEGORY_ORDER in src/lib/youtubeCatalog.ts. */
const CATEGORIES = [
  'Identity & Purpose',
  'Emotional Intelligence',
  'Motherhood & Family',
  'Leadership',
  'Relationships',
  'Finance',
  'Spiritual Growth',
  'Life & Vlogs',
];

function loadDotEnv() {
  if (!existsSync(ENV_PATH)) return;
  try {
    const text = readFileSync(ENV_PATH, 'utf8');
    for (const line of text.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eq = trimmed.indexOf('=');
      if (eq <= 0) continue;
      const key = trimmed.slice(0, eq).trim();
      let val = trimmed.slice(eq + 1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      if (key && process.env[key] === undefined) process.env[key] = val;
    }
  } catch {
    /* ignore */
  }
}

/** `--add ID,ID` or `--add=ID,ID` */
function parseAddIds(argv) {
  const ids = [];
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    let value = null;
    if (arg === '--add') value = argv[++i] ?? '';
    else if (arg.startsWith('--add=')) value = arg.slice('--add='.length);
    if (value) ids.push(...value.split(',').map((s) => s.trim()).filter(Boolean));
  }
  return ids;
}

function longFormPlaylistId(channelId) {
  return `UULF${channelId.replace(/^UC/, '')}`;
}

function inferCategory(text) {
  const t = text.toLowerCase();
  if (/\b(vlog|vlogmas|birthday|karaoke|grwm|graduation)\b|spend the day with me/.test(t)) return 'Life & Vlogs';
  if (/\b(finance|financial|money|budget|invest|income|wealth)\b/.test(t)) return 'Finance';
  if (/\b(motherhood|mum|mom|mums|moms|mother|parenting|daughter|son|kids|children|family)\b/.test(t))
    return 'Motherhood & Family';
  if (/\b(relationship|marriage|dating|spouse|partner|communication)\b/.test(t)) return 'Relationships';
  if (/\b(leadership|leader|influence|team|vision)\b/.test(t)) return 'Leadership';
  if (/\b(purpose|identity|calling|destiny|assignment|herdentity|self-discovery|women empowerment)\b/.test(t))
    return 'Identity & Purpose';
  if (/\b(confidence|boundary|boundaries|emotion|anxious|self-worth|people-pleas|mental health|mindset)\b/.test(t))
    return 'Emotional Intelligence';
  return 'Spiritual Growth';
}

function pickCategory(videoId, title, desc, overrides) {
  const overrideCat = overrides[videoId];
  return CATEGORIES.includes(overrideCat) ? overrideCat : inferCategory(`${title}\n${desc}`);
}

function formatPublishedDate(iso) {
  try {
    return new Date(iso).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return '';
  }
}

function formatSeconds(total) {
  if (!Number.isFinite(total) || total <= 0) return '';
  const h = Math.floor(total / 3600);
  const min = Math.floor((total % 3600) / 60);
  const s = Math.floor(total % 60);
  if (h > 0) {
    return `${h}:${String(min).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }
  return `${min}:${String(s).padStart(2, '0')}`;
}

/** "5:51" / "1:06:02" → seconds */
function displayDurationSeconds(display) {
  if (!display || typeof display !== 'string') return null;
  const parts = display.trim().split(':').map(Number);
  if (parts.length < 2 || parts.some((n) => Number.isNaN(n))) return null;
  return parts.reduce((total, n) => total * 60 + n, 0);
}

function isoDurationSeconds(iso) {
  if (!iso || typeof iso !== 'string') return null;
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return null;
  return Number(m[1] || 0) * 3600 + Number(m[2] || 0) * 60 + Number(m[3] || 0);
}

function pickAlternateLink(linkNode) {
  if (!linkNode) return '';
  const links = Array.isArray(linkNode) ? linkNode : [linkNode];
  const alt = links.find((l) => l['@_rel'] === 'alternate');
  return alt?.['@_href'] || links[0]?.['@_href'] || '';
}

function loadJson(path, fallback) {
  if (!existsSync(path)) return fallback;
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch {
    return fallback;
  }
}

function loadOverrides() {
  const j = loadJson(OVERRIDES_PATH, {});
  return j && typeof j === 'object' ? j : {};
}

function buildVideo({ videoId, title, desc, publishedAt, durationSec, img }, overrides) {
  return {
    videoId,
    title,
    desc,
    publishedAt,
    date: formatPublishedDate(publishedAt),
    duration: formatSeconds(durationSec),
    type: 'Video',
    link: `https://www.youtube.com/watch?v=${videoId}`,
    img: img || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    category: pickCategory(videoId, title, desc, overrides),
  };
}

function sortNewestFirst(videos) {
  return videos.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
}

// --- YouTube Data API ------------------------------------------------------

async function apiGetJson(url) {
  const res = await fetch(url);
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`YouTube API ${res.status}: ${text.slice(0, 200)}`);
  }
  return JSON.parse(text);
}

async function resolveChannelId(apiKey, channelId) {
  const tryChannel = async (params) => {
    const url = new URL('https://www.googleapis.com/youtube/v3/channels');
    url.searchParams.set('part', 'id');
    for (const [k, v] of Object.entries(params)) {
      url.searchParams.set(k, v);
    }
    url.searchParams.set('key', apiKey);
    return apiGetJson(url.href);
  };

  let data = await tryChannel({ id: channelId });
  if (!data.items?.length) {
    data = await tryChannel({ forHandle: 'damiolatunji' });
  }
  const ch = data.items?.[0];
  if (!ch) throw new Error('Channel not found (check YOUTUBE_CHANNEL_ID or handle)');
  return ch.id;
}

async function listAllPlaylistVideoIds(apiKey, playlistId) {
  const ids = [];
  let pageToken;
  do {
    const url = new URL('https://www.googleapis.com/youtube/v3/playlistItems');
    url.searchParams.set('part', 'contentDetails');
    url.searchParams.set('playlistId', playlistId);
    url.searchParams.set('maxResults', '50');
    url.searchParams.set('key', apiKey);
    if (pageToken) url.searchParams.set('pageToken', pageToken);
    const data = await apiGetJson(url.href);
    for (const item of data.items || []) {
      const vid = item.contentDetails?.videoId;
      if (vid) ids.push(vid);
    }
    pageToken = data.nextPageToken;
  } while (pageToken);
  return ids;
}

async function fetchVideosByIds(apiKey, videoIds) {
  const items = [];
  const chunkSize = 50;
  for (let i = 0; i < videoIds.length; i += chunkSize) {
    const chunk = videoIds.slice(i, i + chunkSize);
    const url = new URL('https://www.googleapis.com/youtube/v3/videos');
    url.searchParams.set('part', 'snippet,contentDetails,status');
    url.searchParams.set('id', chunk.join(','));
    url.searchParams.set('key', apiKey);
    const data = await apiGetJson(url.href);
    items.push(...(data.items || []));
  }
  return items;
}

async function fetchViaDataApi(apiKey, channelId, overrides) {
  const resolvedChannelId = await resolveChannelId(apiKey, channelId);
  const ids = await listAllPlaylistVideoIds(apiKey, longFormPlaylistId(resolvedChannelId));
  const details = ids.length ? await fetchVideosByIds(apiKey, ids) : [];

  const videos = details
    .filter((item) => item.status?.privacyStatus === 'public')
    .map((item) => {
      const sn = item.snippet || {};
      const thumbs = sn.thumbnails || {};
      return buildVideo(
        {
          videoId: item.id,
          title: (sn.title || '').trim(),
          desc: (sn.description || '').trim(),
          publishedAt: sn.publishedAt || '',
          durationSec: isoDurationSeconds(item.contentDetails?.duration),
          img: thumbs.maxres?.url || thumbs.standard?.url || thumbs.high?.url,
        },
        overrides,
      );
    });

  return { videos: sortNewestFirst(videos), resolvedChannelId };
}

// --- No-key fallback: RSS + watch-page checks ------------------------------

async function fetchLongFormRss(channelId) {
  const feedUrl = `https://www.youtube.com/feeds/videos.xml?playlist_id=${longFormPlaylistId(channelId)}`;
  const res = await fetch(feedUrl, { headers: { 'User-Agent': 'damiolatunji-site-fetch/1.0' } });
  if (!res.ok) {
    throw new Error(`RSS fetch failed: ${res.status} ${feedUrl}`);
  }
  const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' });
  const doc = parser.parse(await res.text());
  const rawEntries = doc.feed?.entry;
  const entries = rawEntries ? (Array.isArray(rawEntries) ? rawEntries : [rawEntries]) : [];

  return entries
    .map((entry) => {
      const group = entry['media:group'] || {};
      return {
        videoId: entry['yt:videoId'],
        title: String(entry.title ?? '').trim(),
        desc: String(group['media:description'] ?? '').trim(),
        publishedAt: String(entry.published ?? ''),
        link: pickAlternateLink(entry.link),
      };
    })
    .filter((v) => v.videoId && !v.link.includes('/shorts/'));
}

/**
 * Reads a video's public watch page. Returns null when the page can't be understood
 * (blocked, consent wall, markup change) so callers can keep what they already have.
 */
async function fetchWatchInfo(videoId) {
  await new Promise((r) => setTimeout(r, WATCH_PAGE_DELAY_MS));
  try {
    const res = await fetch(`https://www.youtube.com/watch?v=${videoId}&hl=en`, { headers: BROWSER_HEADERS });
    if (!res.ok) return null;
    const html = await res.text();
    const m = html.match(/var ytInitialPlayerResponse\s*=\s*(\{.+?\});\s*(?:var |<\/script>)/s);
    if (!m) return null;
    const player = JSON.parse(m[1]);
    const status = player.playabilityStatus?.status;
    if (!status) return null;
    const vd = player.videoDetails || {};
    const mf = player.microformat?.playerMicroformatRenderer || {};
    return {
      available: status === 'OK',
      unlisted: mf.isUnlisted === true,
      live: vd.isLiveContent === true,
      title: (vd.title || '').trim(),
      desc: (vd.shortDescription || '').trim(),
      publishedAt: mf.publishDate || mf.uploadDate || '',
      durationSec: Number(vd.lengthSeconds) || null,
    };
  } catch {
    return null;
  }
}

/** /shorts/ID answers 200 for a Short and redirects to /watch for a regular video. */
async function isShort(videoId) {
  try {
    const res = await fetch(`https://www.youtube.com/shorts/${videoId}`, {
      headers: BROWSER_HEADERS,
      redirect: 'manual',
    });
    return res.status === 200;
  } catch {
    return false;
  }
}

async function fetchViaRssMerge(channelId, existingVideos, addIds, overrides) {
  const rssVideos = await fetchLongFormRss(channelId);
  const rssIds = new Set(rssVideos.map((v) => v.videoId));
  const existingById = new Map(existingVideos.map((v) => [v.videoId, v]));
  const videos = [];
  let dropped = 0;

  for (const r of rssVideos) {
    const existing = existingById.get(r.videoId);
    let durationSec = displayDurationSeconds(existing?.duration);
    // Only look up videos we haven't seen yet (duration), to stay well under YouTube's rate limit.
    if (durationSec === null) {
      const info = await fetchWatchInfo(r.videoId);
      if (info?.live) continue;
      durationSec = info?.durationSec ?? null;
    }
    videos.push(buildVideo({ ...r, durationSec, img: existing?.img }, overrides));
  }

  const olderIds = [...new Set([...existingById.keys(), ...addIds])].filter((id) => !rssIds.has(id));
  for (const id of olderIds) {
    const existing = existingById.get(id);
    const info = await fetchWatchInfo(id);
    if (!info) {
      if (existing) {
        videos.push({ ...existing, category: pickCategory(id, existing.title, existing.desc, overrides) });
      } else {
        console.warn(`  ! ${id}: could not read watch page, skipped`);
      }
      continue;
    }
    // Catalog entries came from the long-form playlist; only hand-added ids need the Shorts check.
    if (!info.available || info.unlisted || info.live || (!existing && (await isShort(id)))) {
      if (existing) {
        dropped++;
        console.log(`  - removed ${id} (${info.available ? 'unlisted/live/Short' : 'private or deleted'}): ${existing.title}`);
      } else {
        console.warn(`  ! ${id}: not a public long-form video, skipped`);
      }
      continue;
    }
    videos.push(
      buildVideo(
        {
          videoId: id,
          title: info.title || existing?.title || '',
          desc: info.desc || existing?.desc || '',
          publishedAt: info.publishedAt || existing?.publishedAt || '',
          durationSec: info.durationSec ?? displayDurationSeconds(existing?.duration),
          img: existing?.img,
        },
        overrides,
      ),
    );
  }

  return { videos: sortNewestFirst(videos), dropped };
}

async function main() {
  loadDotEnv();
  const channelId = process.env.YOUTUBE_CHANNEL_ID || DEFAULT_CHANNEL_ID;
  const apiKey = (process.env.YOUTUBE_API_KEY || '').trim();
  const addIds = parseAddIds(process.argv.slice(2));
  const overrides = loadOverrides();
  const existing = loadJson(OUT, null);

  let videos = null;
  let effectiveChannelId = channelId;
  let source = 'rss-merge';

  if (apiKey) {
    try {
      const result = await fetchViaDataApi(apiKey, channelId, overrides);
      videos = result.videos;
      effectiveChannelId = result.resolvedChannelId || channelId;
      source = 'youtube-data-api';
      console.log(`API: ${videos.length} long-form videos from the channel's Videos playlist`);
      if (addIds.length) console.log('  (--add ignored: the API already returns every public video)');
    } catch (err) {
      const msg = String(err.message || err);
      console.warn('YouTube Data API failed, using RSS fallback:', msg.split('\n')[0]);
      if (msg.includes('API Key not found') || msg.includes('API key not valid')) {
        console.warn('\n  → YOUTUBE_API_KEY in .env was rejected (deleted or mistyped). Create a new key, see .env.example.\n');
      } else if (msg.includes('403') && msg.toLowerCase().includes('block')) {
        console.warn(
          '\n  → This is usually an API key restriction issue. In Google Cloud Console → Credentials → your key:\n' +
            '     set "Application restrictions" to None (for local scripts), not "HTTP referrers".\n' +
            '     Node.js has no browser referrer, so Website restrictions block the request.\n',
        );
      }
    }
  }

  if (!videos) {
    const result = await fetchViaRssMerge(channelId, existing?.videos ?? [], addIds, overrides);
    videos = result.videos;
    console.log(
      `RSS merge: ${videos.length} long-form videos (${result.dropped} removed)` +
        (apiKey ? '' : ' — add YOUTUBE_API_KEY in .env to list the full channel automatically'),
    );
  }

  if (videos.length === 0) {
    throw new Error('No videos found; leaving the existing catalog untouched.');
  }

  const payload = {
    channelId: effectiveChannelId,
    channelUrl: `https://www.youtube.com/channel/${effectiveChannelId}`,
    fetchedAt: new Date().toISOString(),
    source,
    videos,
  };

  writeFileSync(OUT, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
  console.log(`Wrote ${videos.length} videos to ${OUT} (source: ${source})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
