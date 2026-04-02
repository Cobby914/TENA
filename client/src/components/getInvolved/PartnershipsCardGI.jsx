import { Box, Image } from "@chakra-ui/react";
import SimpleCircle from "../ui/SimpleCircle";

const Partners = "/GetInvolved/GetInvolvedPartnerships.jpg";
import GIC from "./GetInvolvedCard"

export default function GetInvolvedCard ({}) {
    return (
    <Box width="100%" overflowX="hidden" position="relative" display="block">
        <Box position="relative" width="100%" maxW="2500px" mx="auto">
            <GIC
                title="Partnership"
                description="We collaborate with healthcare organizations, nonprofits, schools, and funders to expand access to care, strengthen prevention, and build workforce pathways rooted in community trust."
                buttonName="Learn More"
                image_here={Partners}
                destination="/partners"
                decorations={
                    <Box
                        position="absolute"
                        top="0"
                        right={{ base: "10%", md: "8%" }}
                        width={{ base: "140px", md: "180px" }}
                        height={{ base: "80px", md: "100px" }}
                        pointerEvents="none"
                        zIndex={0}
                    >
                        <SimpleCircle
                            size="190px"
                            strokeWidth="35px"
                            strokeColor="var(--color-brand-accent)"
                            opacity={0.15}
                            position="absolute"
                            left="-40px"
                            top="-100px"
                        />
                    </Box>
                }
                imageDecorations={
                    <Box
                        position="absolute"
                        bottom="-95px"
                        left="300px"
                        pointerEvents="none"
                        zIndex={0}
                    >
                        <SimpleCircle
                            size="160px"
                            strokeWidth="35px"
                            strokeColor="var(--color-brand-accent)"
                            opacity={0.15}
                            position="relative"
                        />
                    </Box>
                }
            />
        </Box>
    </Box>
    );
}