import { Box, Flex, VStack, Text, Image } from "@chakra-ui/react";

export default function Context({ problemStatement, solutionDescription1, solutionDescription2, problemImage}) {
    return (
        <Box
            width="100%"
            minHeight={{ base: "auto", lg: "1000px" }}
            py={{ base: 8, md: 12, lg: 0 }}
        >
            <Box
                maxW="2500px"
                mx="auto"
                px={{ base: 4, md: 10, lg: 20 }}
            >
                <Flex
                    minHeight={{ base: "auto", lg: "1000px" }}
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    width="100%"
                    maxW="1550px"
                    mx="auto"
                >
                    <Text
                        fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
                        lineHeight="1.1"
                        width="100%"
                    >
                        Problem/What we are doing:<br/>{problemStatement}
                    </Text>
                    <Flex
                        direction={{ base: "column", lg: "row" }}
                        justifyContent="space-between"
                        alignItems="center"
                        width="100%"
                        pt={{ base: "30px", md: "50px", lg: "75px" }}
                        gap={{ base: 6, md: 8 }}
                    >
                        <VStack width="100%">
                            <Text fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} width="100%" maxW={{ lg: "750px" }} lineHeight="1.3" fontWeight="normal">
                                Description of Project/solution:<br/>{solutionDescription1}<br/><br/>{solutionDescription2}
                            </Text>
                        </VStack>

                        <Flex width="100%" justifyContent="center">
                            <Image src={problemImage} maxW={{ base: "100%", md: "400px", lg: "100%" }}></Image>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
}