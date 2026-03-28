/**
 * Fetches public video metadata from YouTube (Atom RSS) for the channel.
 * Optional YOUTUBE_API_KEY enriches entries with exact duration (Data API v3).
 *
 * Usage: npm run fetch-messages
 * Override channel: YOUTUBE_CHANNEL_ID=UC... npm run fetch-messages
 */

import { writeFileSync, readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { XMLParser } from 'fast-xml-parser';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT = join(ROOT, 'src', 'data', 'youtubeMessages.json');
const OVERRIDES_PATH = join(ROOT, 'src', 'data', 'youtubeCategoryOverrides.json');

/** Default: @damiolatunji (resolves to Herdentity channel in RSS) */
const DEFAULT_CHANNEL_ID = 'UCyfEw0p5Rx-oGpyex3RWNTw';

const CATEGORIES = [
  'Identity & Purpose',
  'Emotional Intelligence',
  'Leadership',
  'Relationships',
  'Finance',
  'Spiritual Growth',
];

function inferCategory(text) {
  const t = text.toLowerCase();
  if (/\b(finance|financial|money|budget|invest|income|wealth)\b/.test(t)) return 'Finance';
  if (/\b(relationship|marriage|dating|spouse|partner|communication)\b/.test(t)) return 'Relationships';
  if (/\b(leadership|leader|influence|team|vision)\b/.test(t)) return 'Leadership';
  // Herdentity / identity-first so filters match channel themes before generic “confidence”
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

async function fetchDurations(videoIds, apiKey) {
  const map = new Map();
  if (!apiKey || videoIds.length === 0) return map;
  const chunkSize = 50;
  for (let i = 0; i < videoIds.length; i += chunkSize) {
    const chunk = videoIds.slice(i, i + chunkSize);
    const url = new URL('https://www.googleapis.com/youtube/v3/videos');
    url.searchParams.set('part', 'contentDetails');
    url.searchParams.set('id', chunk.join(','));
    url.searchParams.set('key', apiKey);
    const res = await fetch(url);
    if (!res.ok) {
      console.warn('youtube/v3/videos failed:', res.status, await res.text().catch(() => ''));
      continue;
    }
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
  const channelId = process.env.YOUTUBE_CHANNEL_ID || DEFAULT_CHANNEL_ID;
  const apiKey = process.env.YOUTUBE_API_KEY || '';
  const overrides = loadOverrides();

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

  const videos = entries.map((entry) => {
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
  });

  const ids = videos.map((v) => v.videoId).filter(Boolean);
  const durationMap = await fetchDurations(ids, apiKey);
  for (const v of videos) {
    v.duration = durationMap.get(v.videoId) || '';
  }

  videos.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  const payload = {
    channelId,
    channelUrl: `https://www.youtube.com/channel/${channelId}`,
    fetchedAt: new Date().toISOString(),
    videos,
  };

  writeFileSync(OUT, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
  console.log(`Wrote ${videos.length} videos to ${OUT}`);
  if (!apiKey) {
    console.log('Tip: set YOUTUBE_API_KEY to fill duration fields via YouTube Data API v3.');
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
