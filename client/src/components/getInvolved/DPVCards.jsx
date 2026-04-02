import { Box, VStack, Image } from "@chakra-ui/react";
import GetInvolvedCard from "./GetInvolvedCard";
import DonationCard from "./DonationsCardGI";
import PartnershipCard from "./PartnershipsCardGI";
import VolunteerCard from "./VolunteerCardGI";

const MidCirc = "/GetInvolved/vectors/GIMiddle.svg";

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
                            <DonationCard></DonationCard>
                            <PartnershipCard></PartnershipCard>
                            <VolunteerCard></VolunteerCard>
                        </VStack>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}