import { useId } from "react";
import { Box } from "@chakra-ui/react";

/**
 * Concentric stroke rings with vertical half-gradient (teal top, blue bottom) — same pattern as Programs hero.
 */
export default function MultiRingCircle({ width = 300, height = 300 }) {
    const uid = useId().replace(/:/g, "");
    const gradientId = `multiRingHalfGradient-${uid}`;

    return (
        <Box w={width} h={height} position="relative">
            <svg viewBox="0 0 320 320" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
                <defs>
                    <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#5CDAC5" />
                        <stop offset="50%" stopColor="#5CDAC5" />
                        <stop offset="50%" stopColor="#1573CF" />
                        <stop offset="100%" stopColor="#1573CF" />
                    </linearGradient>
                </defs>
                {Array.from({ length: 6 }).map((_, index) => {
                    const radius = 150 - index * 20;
                    return (
                        <circle
                            key={index}
                            cx="160"
                            cy="160"
                            r={radius}
                            fill="none"
                            stroke={`url(#${gradientId})`}
                            strokeWidth="6"
                        />
                    );
                })}
            </svg>
        </Box>
    );
}
