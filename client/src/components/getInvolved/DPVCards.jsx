import { Box, VStack } from "@chakra-ui/react";
import FadeInWhenVisible from "../home/ui/FadeInWhenVisible";
import DonationCard from "./DonationsCardGI";
import PartnershipCard from "./PartnershipsCardGI";
import VolunteerCard from "./VolunteerCardGI";

export default function DPVCards() {
    return (

<Box width="100%" overflowX="hidden" position="relative" display = "block"> 
            <Box position="relative" width="100%" maxW="2500px" mx="auto">

                <Box as="section" bg="white" width="100%" pb={{ base: 10, md: 16, lg: 20 }}>
                    <Box
                        maxW="2500px"
                        mx="auto"
                        px={{ base: 4, md: 10, lg: 20 }}
                    >

                        <VStack spacing={{ base: 8, md: 10, lg: 12 }} mt={{ base: 6, md: 8, lg: 10 }}>
                            <FadeInWhenVisible w="100%" amount={0.35}>
                                <DonationCard />
                            </FadeInWhenVisible>
                            <FadeInWhenVisible delay={0.08} w="100%" amount={0.35}>
                                <PartnershipCard />
                            </FadeInWhenVisible>
                            <FadeInWhenVisible delay={0.14} w="100%" amount={0.35}>
                                <VolunteerCard />
                            </FadeInWhenVisible>
                        </VStack>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}