import { Box } from "@chakra-ui/react";

/**
 * Reusable simple circular ring used as a decorative vector.
 */
export default function SimpleCircle({
    size = "220px",
    strokeWidth = "32px",
    color = "#5CDAC5",
    strokeColor,
    opacity = 0.15,
    ...boxProps
}) {
    const resolvedColor = strokeColor ?? color;

    return (
        <Box
            boxSize={size}
            borderRadius="full"
            borderStyle="solid"
            borderWidth={strokeWidth}
            borderColor={resolvedColor}
            opacity={opacity}
            pointerEvents="none"
            aria-hidden
            {...boxProps}
        />
    );
}
