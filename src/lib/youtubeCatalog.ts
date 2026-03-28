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

/** Sidebar topics: only categories that appear on at least one video, plus All Messages first. */
export function filterTopicsFromVideos(videos: readonly { category: string }[]): string[] {
  const used = new Set(videos.map((v) => v.category));
  const ordered = CANONICAL_CATEGORY_ORDER.filter((c) => used.has(c));
  const extras = [...used]
    .filter((c) => !CANONICAL_CATEGORY_ORDER.includes(c as (typeof CANONICAL_CATEGORY_ORDER)[number]))
    .sort((a, b) => a.localeCompare(b));
  return ['All Messages', ...ordered, ...extras];
}
