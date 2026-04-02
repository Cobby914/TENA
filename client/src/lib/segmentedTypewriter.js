/**
 * Helpers for segmented hero typewriter copy (plain + optional accent spans).
 *
 * @typedef {{ text: string, accent?: boolean }} TypewriterSegment
 * @typedef {TypewriterSegment[]} TypewriterSegmentList
 */

/**
 * @param {TypewriterSegment[]} segments
 * @returns {number}
 */
export function segmentCharCount(segments) {
  if (!segments?.length) return 0;
  return segments.reduce((n, s) => n + (s.text?.length ?? 0), 0);
}
