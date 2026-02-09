import { Box, Text, VStack } from "@chakra-ui/react";

export default function GetInvolvedHeader() {
    return(
        <Box 
            as="section"
            bg="white"
            width="100%"
            pt={{ base: 10, md: 16, lg: 20 }}
            pb={{ base: 6, md: 8, lg: 10 }}
        >
            <Box
                maxW="2500px"
                mx="auto"
                px={{ base: 4, md: 10, lg: 20 }}
            >
                <VStack spacing={{ base: 4, md: 6 }} textAlign="center" maxW="900px" mx="auto">
                    <Text fontSize={{ base: "3xl", md: "5xl", lg: "7xl" }} fontWeight="normal" lineHeight="1.05">
                        Help us out. Get Involved.
                    </Text>
                    <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur..
                    </Text>
                </VStack>
            </Box>
        </Box>
    );
}