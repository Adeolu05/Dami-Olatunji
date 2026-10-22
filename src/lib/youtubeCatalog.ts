/** Preferred order for filter buttons when those categories exist in the catalog. */
export const CANONICAL_CATEGORY_ORDER = [
  'Identity & Purpose',
  'Emotional Intelligence',
  'Motherhood & Family',
  'Leadership',
  'Relationships',
  'Finance',
  'Spiritual Growth',
  'Life & Vlogs',
] as const;

export function sortVideosNewestFirst<T extends { publishedAt: string }>(videos: readonly T[]): T[] {
  return [...videos].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

type CatalogVideo = {
  type: string;
  link: string;
};

/**
 * Safety net only: the catalog is built from the channel's long-form playlist, which never
 * contains Shorts. Hashtags aren't checked — many regular videos carry #shorts-style tags.
 */
export function onlyMainVideos<T extends CatalogVideo>(videos: readonly T[]): T[] {
  return videos.filter((v) => v.type === 'Video' && !v.link.includes('/shorts/'));
}

/** Strip channel-name / year suffixes ("|| Dami Oladele || 2021") and stray @handles from titles. */
export function cleanVideoTitle(title: string): string {
  const parts = title
    .replace(/​/g, '')
    .replace(/\s*@\s*herdentity\s*/gi, ' ')
    .split(/\s*\|\|?\s*/)
    .map((p) => p.trim())
    .filter((p) => p && !/^(dami ola(tunji|dele)|herdentity|\d{4})$/i.test(p));
  return parts.join(' | ').replace(/\s+/g, ' ').trim() || title.trim();
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
