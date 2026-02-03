import { Box, VStack } from "@chakra-ui/react";
import GetInvolvedCard from "../ui/GetInvolvedCard";

export default function DPVCards() {
    return (
        <Box as="section" bg="white" width="100%" px="20" pb="20">
            <VStack spacing="12" mt="10">
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
    );
}