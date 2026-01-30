import { Text, Box, Flex, VStack } from "@chakra-ui/react";

export default function OurPrograms() {
    return(
        <Box
            as="section"
            bg="rgb(184, 184, 184)"
            width="100%"
            px="20"
            py="16"
        >
            <Flex
                maxW="1200px"
                mx="auto"
                align="center"
                justify="space-between"
                gap="20"
            >
                {/* Left Side Header & Text */}
                <Flex direction="column" alignItems="flex-start" maxW="520px">
                    <Text fontSize="6xl" fontWeight="normal" mb="6">
                        Our Programs
                    </Text>
                    <Text fontSize="lg" lineHeight="1.35">
                        TENA is a community-centric nonprofit building ecosystems that empower underserved communities to overcome systemic barriers through optimizing access to resources, knowledge, and entry to healthcare professions.
                    </Text>
                </Flex>
                {/* Right Image Placeholder */}
                <Flex
                    flex="1"
                    minH="260px"
                    align="center"
                    justify="center"
                >
                    <Text fontSize="4xl">
                        IMG
                    </Text>
                </Flex>
            </Flex>
        </Box>
    );    
}