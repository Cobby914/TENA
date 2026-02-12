import { Box, VStack } from "@chakra-ui/react";
import GetInvolvedCard from "../ui/GetInvolvedCard";

export default function DPVCards() {
    return (
        <Box as="section" bg="white" width="100%" pb={{ base: 10, md: 16, lg: 20 }}>
            <Box
                maxW="2500px"
                mx="auto"
                px={{ base: 4, md: 10, lg: 20 }}
            >
                <VStack spacing={{ base: 8, md: 10, lg: 12 }} mt={{ base: 6, md: 8, lg: 10 }}>
                    <GetInvolvedCard
                        title="Donations"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        variant="donations"
                    />
                    <GetInvolvedCard
                        title="Partnership"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        variant="learnMore"
                    />
                    <GetInvolvedCard
                        title="Volunteering"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        variant="learnMore"
                    />
                </VStack>
            </Box>
        </Box>
    );
}