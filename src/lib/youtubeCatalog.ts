import {
  DEFAULT_SHORT_MAX_SECONDS,
  looksLikeYouTubeShortTitleOrDesc,
  parseDisplayDurationToSeconds,
} from './shortsDetection';

/** Preferred order for filter buttons when those categories exist in the catalog. */
export const CANONICAL_CATEGORY_ORDER = [
  'Identity & Purpose',
  'Emotional Intelligence',
  'Leadership',
  'Relationships',
  'Finance',
  'Spiritual Growth',
] as const;

export function sortVideosNewestFirst<T extends { publishedAt: string }>(videos: readonly T[]): T[] {
  return [...videos].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

type CatalogVideo = {
  type: string;
  link: string;
  title?: string;
  desc?: string;
  duration?: string;
};

/** Long-form uploads only: no /shorts/ URLs, no Shorts hashtags, not over-short by duration. */
export function onlyMainVideos<T extends CatalogVideo>(
  videos: readonly T[],
  shortMaxSeconds: number = DEFAULT_SHORT_MAX_SECONDS,
): T[] {
  return videos.filter((v) => {
    if (v.type !== 'Video' || v.link.includes('/shorts/')) return false;
    const title = v.title ?? '';
    const desc = v.desc ?? '';
    if (looksLikeYouTubeShortTitleOrDesc(title, desc)) return false;
    const sec = v.duration ? parseDisplayDurationToSeconds(v.duration) : null;
    if (sec !== null && sec <= shortMaxSeconds) return false;
    return true;
  });
}

/** Sidebar topics: only categories that appear on at least one video, plus All Messages first. */
export function filterTopicsFromVideos(videos: readonly { category: string }[]): string[] {
  const used = new Set(videos.map((v) => v.category));
  const ordered = CANONICAL_CATEGORY_ORDER.filter((c) => used.has(c));
  const extras = [...used]
    .filter((c) => !CANONICAL_CATEGORY_ORDER.includes(c as (typeof CANONICAL_CATEGORY_ORDER)[number]))
    .sort((a, b) => a.localeCompare(b));
  return ['All Messages', ...ordered, ...extras];
}
