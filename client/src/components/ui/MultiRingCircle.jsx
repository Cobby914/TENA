import { useId } from "react";
import { Box } from "@chakra-ui/react";

const CX = 160;
const CY = 160;
const TEAL = "var(--color-brand-accent)";
const BLUE = "var(--color-brand-primary)";

/** Left semicircle: θ(t) = -π/2 − t, t ∈ [0, π] (top → bottom along the left arc). */
/* GOD I LOVE MATH, WHY DID I HAVE TO LOOK TRIG TO DO THIS*/
function arcSegmentD(cx, cy, r, tStart, tEnd) {
    const θ0 = -Math.PI / 2 - tStart;
    const θ1 = -Math.PI / 2 - tEnd;
    const x0 = cx + r * Math.cos(θ0);
    const y0 = cy + r * Math.sin(θ0);
    const x1 = cx + r * Math.cos(θ1);
    const y1 = cy + r * Math.sin(θ1);
    const delta = Math.abs(tEnd - tStart);
    const largeArc = delta > Math.PI - 1e-9 ? 1 : 0;
    const sweep = tEnd > tStart ? 0 : 1;
    return `M ${x0} ${y0} A ${r} ${r} 0 ${largeArc} ${sweep} ${x1} ${y1}`;
}

/**
 * Concentric rings: solid, vertical gradient (full circles), or semicircle arcs with
 * staggered teal/blue split (About-style: inner rings shift to blue earlier along the arc).
 */
export default function MultiRingCircle({
    width = 280,
    height = 280,
    variant = "gradient",
    solidColor = TEAL,
    gradientStyle = "vertical",
    ...rest
}) {
    const uid = useId().replace(/:/g, "");
    const gradientId = `multiRingGradient-${gradientStyle}-${uid}`;

    const stroke =
        variant === "solid" ? solidColor : `url(#${gradientId})`;

    const ringRadii = [150, 130, 110, 90, 70];

    return (
        <Box w={width} h={height} position="relative" {...rest}>
            <svg viewBox="0 0 320 320" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
                {variant === "gradient" && gradientStyle !== "semicircle" && (
                    <defs>
                        {gradientStyle === "vertical" ? (
                            <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor={TEAL} />
                                <stop offset="50%" stopColor={TEAL} />
                                <stop offset="50%" stopColor={BLUE} />
                                <stop offset="100%" stopColor={BLUE} />
                            </linearGradient>
                        ) : (
                            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor={TEAL} />
                                <stop offset="55%" stopColor={TEAL} />
                                <stop offset="100%" stopColor={BLUE} />
                            </linearGradient>
                        )}
                    </defs>
                )}

                {variant === "gradient" && gradientStyle === "semicircle" ? (
                    <>
                        {ringRadii.map((r, i) => {
                            const tSplit =
                                Math.PI * (0.88 - 0.1 * i);
                            return (
                                <g key={`${r}-${i}`}>
                                    <path
                                        d={arcSegmentD(CX, CY, r, 0, tSplit)}
                                        fill="none"
                                        stroke={TEAL}
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d={arcSegmentD(CX, CY, r, tSplit, Math.PI)}
                                        fill="none"
                                        stroke={BLUE}
                                        strokeWidth="5"
                                        strokeLinecap="round"
                                    />
                                </g>
                            );
                        })}
                    </>
                ) : (
                    ringRadii.map((radius, index) => (
                        <circle
                            key={index}
                            cx="160"
                            cy="160"
                            r={radius}
                            fill="none"
                            stroke={stroke}
                            strokeWidth="5"
                            strokeOpacity={0.54}
                        />
                    ))
                )}
            </svg>
        </Box>
    );
}
