/**
 * Builds src/data/youtubeMessages.json from the YouTube channel.
 *
 * Preferred: YOUTUBE_API_KEY — lists the full uploads playlist (paginated),
 * keeps only main videos: excludes Shorts URLs, #shorts-style tags, and uploads ≤ YOUTUBE_SHORT_MAX_SECONDS (default 180).
 *
 * Fallback: no API key — Atom RSS (~15 recent items), then same Shorts filter.
 *
 * Usage: npm run fetch-messages
 * Optional: YOUTUBE_CHANNEL_ID=UC...  YOUTUBE_SHORT_MAX_SECONDS=180
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

const CATEGORIES = [
  'Identity & Purpose',
  'Emotional Intelligence',
  'Leadership',
  'Relationships',
  'Finance',
  'Spiritual Growth',
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

function inferCategory(text) {
  const t = text.toLowerCase();
  if (/\b(finance|financial|money|budget|invest|income|wealth)\b/.test(t)) return 'Finance';
  if (/\b(relationship|marriage|dating|spouse|partner|communication)\b/.test(t)) return 'Relationships';
  if (/\b(leadership|leader|influence|team|vision)\b/.test(t)) return 'Leadership';
  if (/\b(purpose|identity|calling|destiny|assignment|faith|herdentity|self-discovery|women empowerment)\b/.test(t))
    return 'Identity & Purpose';
  if (/\b(confidence|boundary|boundaries|emotion|anxious|self-worth|people-pleas|mental health|mindset)\b/.test(t))
    return 'Emotional Intelligence';
  if (/\b(worth|spiritual|god|prayer|scripture|psalm|pastor|sermon)\b/.test(t)) return 'Spiritual Growth';
  return 'Spiritual Growth';
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

function parseIsoDuration(iso) {
  if (!iso || typeof iso !== 'string') return '';
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return '';
  const h = Number(m[1] || 0);
  const min = Number(m[2] || 0);
  const s = Number(m[3] || 0);
  if (h > 0) {
    return `${h}:${String(min).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }
  return `${min}:${String(s).padStart(2, '0')}`;
}

function isoDurationSeconds(iso) {
  if (!iso || typeof iso !== 'string') return null;
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return null;
  return Number(m[1] || 0) * 3600 + Number(m[2] || 0) * 60 + Number(m[3] || 0);
}

/** Keep in sync with src/lib/shortsDetection.ts (SHORTS_TEXT_RE). */
const SHORTS_TEXT_RE =
  /[#＃]shorts\b|[#＃]youtubeshorts\b|[#＃]ytshorts\b|\b100daysytshorts\b|\bshortsafrica\b|\bpullupyoshorts\b|\bshortswithmotso\b|\byoutubeshorts\b|\bshortvideo\b|\bviralshorts\b/i;

function looksLikeMarkedShort(title, desc) {
  return SHORTS_TEXT_RE.test(`${title}\n${desc}`);
}

function parseDisplayDurationSeconds(display) {
  if (!display || typeof display !== 'string') return null;
  const s = display.trim();
  if (!s) return null;
  const parts = s.split(':').map((p) => Number(String(p).trim()));
  if (parts.some((n) => Number.isNaN(n))) return null;
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  return null;
}

/** Drop Shorts: hashtags / common Shorts tags, or duration at/below max (null duration = keep). */
function isExcludedAsShort(title, desc, durationSec, shortMaxSeconds) {
  if (looksLikeMarkedShort(title, desc)) return true;
  if (durationSec !== null && durationSec <= shortMaxSeconds) return true;
  return false;
}

function pickAlternateLink(linkNode) {
  if (!linkNode) return '';
  const links = Array.isArray(linkNode) ? linkNode : [linkNode];
  const alt = links.find((l) => l['@_rel'] === 'alternate');
  return alt?.['@_href'] || links[0]?.['@_href'] || '';
}

function loadOverrides() {
  if (!existsSync(OVERRIDES_PATH)) return {};
  try {
    const raw = readFileSync(OVERRIDES_PATH, 'utf8');
    const j = JSON.parse(raw);
    return j && typeof j === 'object' ? j : {};
  } catch {
    return {};
  }
}

function mapApiItemToVideo(item, overrides) {
  const videoId = item.id;
  const sn = item.snippet || {};
  const cd = item.contentDetails || {};
  const title = (sn.title || '').trim();
  const desc = (sn.description || '').trim();
  const publishedAt = sn.publishedAt || '';
  const durIso = cd.duration;
  const inferred = inferCategory(`${title}\n${desc}`);
  const overrideCat = overrides[videoId];
  const category = CATEGORIES.includes(overrideCat) ? overrideCat : inferred;
  const thumbs = sn.thumbnails || {};
  const img =
    thumbs.maxres?.url || thumbs.standard?.url || thumbs.high?.url || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return {
    videoId,
    title,
    desc,
    publishedAt,
    date: formatPublishedDate(publishedAt),
    duration: parseIsoDuration(durIso),
    type: 'Video',
    link: `https://www.youtube.com/watch?v=${videoId}`,
    img,
    category,
    _durationSec: isoDurationSeconds(durIso),
  };
}

async function apiGetJson(url) {
  const res = await fetch(url);
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`YouTube API ${res.status}: ${text.slice(0, 200)}`);
  }
  return JSON.parse(text);
}

async function resolveUploadsPlaylist(apiKey, channelId) {
  const tryChannel = async (params) => {
    const url = new URL('https://www.googleapis.com/youtube/v3/channels');
    url.searchParams.set('part', 'contentDetails');
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
  const uploads = ch.contentDetails?.relatedPlaylists?.uploads;
  if (!uploads) throw new Error('No uploads playlist on channel');
  return { uploadsPlaylistId: uploads, resolvedChannelId: ch.id };
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
    url.searchParams.set('part', 'snippet,contentDetails');
    url.searchParams.set('id', chunk.join(','));
    url.searchParams.set('key', apiKey);
    const data = await apiGetJson(url.href);
    items.push(...(data.items || []));
  }
  return items;
}

async function fetchViaDataApi(apiKey, channelId, shortMaxSeconds, overrides) {
  const { uploadsPlaylistId, resolvedChannelId } = await resolveUploadsPlaylist(apiKey, channelId);
  const allIds = await listAllPlaylistVideoIds(apiKey, uploadsPlaylistId);
  if (allIds.length === 0) return { videos: [], resolvedChannelId };

  const details = await fetchVideosByIds(apiKey, allIds);
  const videos = [];

  for (const item of details) {
    const row = mapApiItemToVideo(item, overrides);
    const sec = row._durationSec;
    delete row._durationSec;
    if (isExcludedAsShort(row.title, row.desc, sec, shortMaxSeconds)) continue;
    videos.push(row);
  }

  videos.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  return { videos, resolvedChannelId };
}

async function fetchViaRss(channelId, apiKey, overrides, shortMaxSeconds) {
  const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${encodeURIComponent(channelId)}`;
  const res = await fetch(feedUrl, {
    headers: { 'User-Agent': 'damiolatunji-site-fetch/1.0' },
  });
  if (!res.ok) {
    throw new Error(`RSS fetch failed: ${res.status} ${feedUrl}`);
  }
  const xml = await res.text();

  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
  });
  const doc = parser.parse(xml);
  const rawEntries = doc.feed?.entry;
  const entries = rawEntries ? (Array.isArray(rawEntries) ? rawEntries : [rawEntries]) : [];

  const videos = entries
    .map((entry) => {
      const videoId = entry['yt:videoId'];
      const title = (entry.title || '').toString().trim();
      const publishedAt = (entry.published || '').toString();
      const link = pickAlternateLink(entry.link);
      const group = entry['media:group'] || {};
      const thumb = group['media:thumbnail'];
      const thumbUrl = thumb?.['@_url'] || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
      let desc = group['media:description'];
      if (desc === undefined || desc === null) desc = '';
      desc = String(desc).trim();

      const isShort = link.includes('/shorts/');
      const inferred = inferCategory(`${title}\n${desc}`);
      const overrideCat = overrides[videoId];
      const category = CATEGORIES.includes(overrideCat) ? overrideCat : inferred;

      return {
        videoId,
        title,
        desc,
        publishedAt,
        date: formatPublishedDate(publishedAt),
        duration: '',
        type: isShort ? 'Short' : 'Video',
        link,
        img: thumbUrl,
        category,
      };
    })
    .filter((v) => v.type === 'Video' && !v.link.includes('/shorts/'))
    .filter((v) => !looksLikeMarkedShort(v.title, v.desc));

  const ids = videos.map((v) => v.videoId).filter(Boolean);
  if (apiKey && ids.length) {
    const durationMap = await fetchDurationsMap(ids, apiKey);
    for (const v of videos) {
      v.duration = durationMap.get(v.videoId) || '';
    }
  }

  const filtered = videos.filter((v) => {
    const sec = parseDisplayDurationSeconds(v.duration);
    return !isExcludedAsShort(v.title, v.desc, sec, shortMaxSeconds);
  });

  filtered.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  return filtered;
}

async function fetchDurationsMap(videoIds, apiKey) {
  const map = new Map();
  const chunkSize = 50;
  for (let i = 0; i < videoIds.length; i += chunkSize) {
    const chunk = videoIds.slice(i, i + chunkSize);
    const url = new URL('https://www.googleapis.com/youtube/v3/videos');
    url.searchParams.set('part', 'contentDetails');
    url.searchParams.set('id', chunk.join(','));
    url.searchParams.set('key', apiKey);
    const res = await fetch(url);
    if (!res.ok) continue;
    const data = await res.json();
    for (const item of data.items || []) {
      const id = item.id;
      const iso = item.contentDetails?.duration;
      map.set(id, parseIsoDuration(iso));
    }
  }
  return map;
}

async function main() {
  loadDotEnv();
  const channelId = process.env.YOUTUBE_CHANNEL_ID || DEFAULT_CHANNEL_ID;
  const apiKey = (process.env.YOUTUBE_API_KEY || '').trim();
  const shortMaxSeconds = Math.max(1, Number(process.env.YOUTUBE_SHORT_MAX_SECONDS || 180) || 180);
  const overrides = loadOverrides();

  let videos = [];
  let effectiveChannelId = channelId;
  let source = 'rss';

  if (apiKey) {
    try {
      const result = await fetchViaDataApi(apiKey, channelId, shortMaxSeconds, overrides);
      videos = result.videos;
      effectiveChannelId = result.resolvedChannelId || channelId;
      if (videos.length > 0) {
        source = 'youtube-data-api';
        console.log(
          `API: ${videos.length} main videos (Shorts excluded: tags + ≤${shortMaxSeconds}s) from uploads playlist`,
        );
      }
    } catch (err) {
      const msg = String(err.message || err);
      console.warn('YouTube Data API failed, using RSS fallback:', msg);
      if (msg.includes('403') && msg.toLowerCase().includes('block')) {
        console.warn(
          '\n  → This is usually an API key restriction issue. In Google Cloud Console → Credentials → your key:\n' +
            '     set "Application restrictions" to None (for local scripts), not "HTTP referrers".\n' +
            '     Node.js has no browser referrer, so Website restrictions block the request.\n',
        );
      }
    }
  }

  if (videos.length === 0) {
    videos = await fetchViaRss(channelId, apiKey, overrides, shortMaxSeconds);
    if (apiKey) source = 'rss-fallback';
    console.log(
      apiKey
        ? `RSS fallback: ${videos.length} long-form videos`
        : `RSS: ${videos.length} long-form videos (add YOUTUBE_API_KEY in .env for full uploads list)`,
    );
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
