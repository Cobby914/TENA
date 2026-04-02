import { useEffect, useMemo, useState } from "react";
import { segmentCharCount } from "../lib/segmentedTypewriter";

/**
 * Character-by-character reveal for segmented hero copy.
 * Respects `prefers-reduced-motion`. Pass a stable `segments` reference (e.g. module constant or `useMemo`)
 * when possible so the animation does not restart every render.
 *
 * @param {object} options
 * @param {import("../lib/segmentedTypewriter").TypewriterSegment[]} options.segments
 * @param {number} [options.charDelayMs=26]
 * @param {boolean} [options.disabled] If true, shows full text immediately (no typing).
 */
export function useSegmentedTypewriter({
  segments,
  charDelayMs = 26,
  disabled = false,
}) {
  const totalChars = useMemo(() => segmentCharCount(segments), [segments]);

  const segmentsKey = useMemo(() => JSON.stringify(segments), [segments]);

  const [visibleChars, setVisibleChars] = useState(() =>
    disabled ? segmentCharCount(segments) : 0
  );

  useEffect(() => {
    if (disabled || totalChars === 0) {
      setVisibleChars(totalChars);
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) {
      setVisibleChars(totalChars);
      return;
    }

    let cancelled = false;
    let timeoutId;

    const tick = (i) => {
      if (cancelled) return;
      setVisibleChars(i);
      if (i < totalChars) {
        timeoutId = window.setTimeout(() => tick(i + 1), charDelayMs);
      }
    };

    tick(0);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [segmentsKey, totalChars, charDelayMs, disabled]);

  const isComplete = totalChars === 0 || visibleChars >= totalChars;

  return { visibleChars, totalChars, isComplete };
}
