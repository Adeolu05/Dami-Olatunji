/**
 * YouTube Shorts are not always ≤60s. Many are tagged (#shorts, #youtubeshorts, etc.).
 * Keep patterns in sync with `scripts/fetch-youtube-messages.mjs` (SHORTS_TEXT_RE).
 */
export const SHORTS_TEXT_RE =
  /[#＃]shorts\b|[#＃]youtubeshorts\b|[#＃]ytshorts\b|\b100daysytshorts\b|\bshortsafrica\b|\bpullupyoshorts\b|\bshortswithmotso\b|\byoutubeshorts\b|\bshortvideo\b|\bviralshorts\b/i;

export function looksLikeYouTubeShortTitleOrDesc(title: string, desc: string): boolean {
  return SHORTS_TEXT_RE.test(`${title}\n${desc}`);
}

/** Parse display duration from catalog ("5:51" or "1:06:02"). */
export function parseDisplayDurationToSeconds(display: string): number | null {
  const s = display.trim();
  if (!s) return null;
  const parts = s.split(':').map((p) => Number(p.trim()));
  if (parts.some((n) => Number.isNaN(n))) return null;
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  return null;
}

/** Default max length (seconds) for “Shorts-style” vertical uploads without hashtags. */
export const DEFAULT_SHORT_MAX_SECONDS = 180;
