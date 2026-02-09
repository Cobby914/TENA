import { Text, Box, Flex } from "@chakra-ui/react";

export default function OurPrograms() {
    return(
        <Box
            as="section"
            bg="rgb(184, 184, 184)"
            width="100%"
            py={{ base: 8, md: 12, lg: 16 }}
        >
            <Box
                maxW="2500px"
                mx="auto"
                px={{ base: 4, md: 10, lg: 20 }}
            >
                <Flex
                    maxW="1200px"
                    mx="auto"
                    align="center"
                    justify="space-between"
                    gap={{ base: 8, md: 12, lg: 20 }}
                    direction={{ base: "column", lg: "row" }}
                >
                    <Flex direction="column" alignItems="flex-start" maxW={{ base: "100%", lg: "520px" }}>
                        <Text fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }} fontWeight="normal" mb={{ base: 4, md: 6 }}>
                            Our Programs
                        </Text>
                        <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.35">
                            TENA is a community-centric nonprofit building ecosystems that empower underserved communities to overcome systemic barriers through optimizing access to resources, knowledge, and entry to healthcare professions.
                        </Text>
                    </Flex>
                    <Flex
                        flex="1"
                        minH={{ base: "200px", md: "230px", lg: "260px" }}
                        align="center"
                        justify="center"
                        bg="rgb(217, 217, 217)"
                        width="100%"
                    >
                        <Text fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
                            IMG
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );    
}