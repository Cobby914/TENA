import { Box, Flex, Text, Image } from "@chakra-ui/react";

export default function Header({ programName, programImage }) {
    return (
        <Box
            bg="rgb(184,184,184)"
            width="100%"
            minHeight={{ base: "300px", md: "340px", lg: "385px" }}
        >
            <Box
                maxW="2500px"
                mx="auto"
                px={{ base: 4, md: 10, lg: 20 }}
            >
                <Flex
                    minHeight={{ base: "300px", md: "340px", lg: "385px" }}
                    justifyContent="space-between"
                    alignItems="center"
                    width="100%"
                    maxW="1750px"
                    mx="auto"
                    direction={{ base: "column", lg: "row" }}
                    gap={{ base: 6, md: 8 }}
                    py={{ base: 8, lg: 0 }}
                >
                    <Text
                        flex="1"
                        fontSize={{ base: "4xl", md: "5xl", lg: "7xl" }}
                        maxW={{ base: "100%", lg: "600px" }}
                        wordBreak="break-word"
                        textAlign="left"
                        lineHeight="1.1"
                    >
                        {programName}
                    </Text>
                    
                    <Flex
                        flex="2"
                        justifyContent="center"
                        alignItems="center"
                        width="100%"
                    >
                        <Image src={programImage} maxW={{ base: "250px", md: "350px", lg: "100%" }}></Image>    
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
}