import { Box, Image } from "@chakra-ui/react";
import SimpleCircle from "../ui/SimpleCircle";
import MultiRingCircle from "../ui/MultiRingCircle";
import { openDonateWidget } from "../../lib/giveButter";

const Donos = "/static/get-involved/GetInvolvedDonation.JPG";
import GIC from "./GetInvolvedCard"

export default function GetInvolvedCard ({

}) {
    return (
    <Box width="100%" overflowX="hidden" position="relative" display = "block">
          
          <Box position="relative" width="100%" maxW="2500px" mx="auto">

        <GIC
            title="Donations"
            description="Every donation funds a screening that catches something early, a navigation session that connects someone to care, or a student who becomes the healthcare provider their community never had."
            buttonName="Donate Now"
            onAction={openDonateWidget}
            image_here={Donos}
            decorations={
                <>
                    <Box
                        position="absolute"
                        right="0"
                        top={{ base: "26%", md: "28%" }}
                        width={{ base: "64px", md: "84px" }}
                        height={{ base: "148px", md: "180px" }}
                        overflow="hidden"
                        pointerEvents="none"
                        zIndex={0}
                    >
                        <SimpleCircle
                            size="180px"
                            strokeWidth="20px"
                            strokeColor="var(--color-brand-primary)"
                            opacity={0.2}
                            position="absolute"
                            left="0"
                            top="0"
                        />
                    </Box>

                    <Box
                        position="absolute"
                        bottom="0"
                        left="0"
                        width={{ base: "96px", md: "116px" }}
                        height={{ base: "96px", md: "116px" }}
                        overflow="hidden"
                        pointerEvents="none"
                        zIndex={0}
                    >
                        <MultiRingCircle
                            width={220}
                            height={220}
                            position="absolute"
                            top="-20px"
                            right="55px"
                        />
                    </Box>
                </>
            }
        />

    </Box>
    </Box>

    );
}