import { Box, Text, VStack } from "@chakra-ui/react";

export default function GetInvolvedHeader() {
    return(
        <Box 
            as="section"
            bg="white"
            width="100%"
            px="20"
            pt="20"
            pb="10"
        >
            <VStack spacing="6" textAlign="center" maxW="900px" mx="auto">
                {/* Header */}
                <Text fontSize="7xl" fontWeight="normal" lineHeight="1.05">
                    Help us out. Get Involved.
                </Text>
                {/* Paragraph */}
                <Text fontSize="lg" lineHeight="1.6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur..
                </Text>
            </VStack>
        </Box>
    );
} 