import { Box, Text } from "@chakra-ui/react";
import { useSegmentedTypewriter } from "../../hooks/useSegmentedTypewriter";

/**
 * Renders typewriter segments as inline spans (accent uses theme color).
 *
 * @param {object} props
 * @param {import("../../lib/segmentedTypewriter").TypewriterSegment[]} props.segments
 * @param {number} props.visibleChars
 * @param {string} [props.accentColor="brand.accent"]
 */
export function SegmentedTypewriterSpans({
  segments,
  visibleChars,
  accentColor = "brand.accent",
}) {
  let remaining = visibleChars;
  return segments.map((seg, i) => {
    if (remaining <= 0) return null;
    const take = Math.min(seg.text.length, remaining);
    const chunk = seg.text.slice(0, take);
    remaining -= take;
    if (seg.accent) {
      return (
        <Text as="span" color={accentColor} key={`tw-${i}`}>
          {chunk}
        </Text>
      );
    }
    return (
      <Text as="span" key={`tw-${i}`}>
        {chunk}
      </Text>
    );
  });
}

const defaultCursorProps = {
  as: "span",
  className: "hero-typewriter-cursor",
  display: "inline-block",
  w: "3px",
  h: "0.85em",
  ml: "2px",
  verticalAlign: "baseline",
  "aria-hidden": true,
};

/**
 * Blinking caret shown while typing. Override width, color, etc. via props.
 *
 * @param {import("@chakra-ui/react").BoxProps} props
 */
export function TypewriterCursor(props) {
  return <Box {...defaultCursorProps} {...props} />;
}

/**
 * Chakra `Text` with built-in segmented typewriter + cursor. Use for hero headlines;
 * for custom wrappers, use `useSegmentedTypewriter` + `SegmentedTypewriterSpans` + `TypewriterCursor`.
 *
 * @param {object} props
 * @param {import("../../lib/segmentedTypewriter").TypewriterSegment[]} props.segments
 * @param {number} [props.charDelayMs=26]
 * @param {boolean} [props.disabled]
 * @param {boolean} [props.showCursor=true]
 * @param {string} [props.accentColor="brand.accent"]
 * @param {import("@chakra-ui/react").BoxProps} [props.cursorProps] Merged into `TypewriterCursor` (e.g. `bg`, `w`).
 * @param {import("@chakra-ui/react").TextProps} props — forwarded to `Text` (e.g. `as`, `fontSize`, `maxW`).
 */
export function SegmentedTypewriterText({
  segments,
  charDelayMs = 26,
  disabled = false,
  showCursor = true,
  accentColor = "brand.accent",
  cursorProps,
  ...textProps
}) {
  const { visibleChars, isComplete } = useSegmentedTypewriter({
    segments,
    charDelayMs,
    disabled,
  });

  return (
    <Text {...textProps}>
      <SegmentedTypewriterSpans
        segments={segments}
        visibleChars={visibleChars}
        accentColor={accentColor}
      />
      {showCursor && !isComplete && (
        <TypewriterCursor bg={accentColor} {...cursorProps} />
      )}
    </Text>
  );
}
