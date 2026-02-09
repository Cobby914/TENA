import { Box, Flex, Text, SimpleGrid } from "@chakra-ui/react";
import Statistic from "../ui/Statistic"

export default function Statistics({ s1, s1Image, s2, s2Image, s3, s3Image, s4, s4Image }) {
    return (
        <Box
            width="100%"
            minHeight={{ base: "auto", lg: "750px" }}
            py={{ base: 12, md: 16, lg: "500px" }}
        >
            <Box
                maxW="2500px"
                mx="auto"
                px={{ base: 4, md: 10, lg: 20 }}
            >
                <Flex
                    flexDirection="column"
                    minHeight={{ base: "auto", lg: "750px" }}
                    justifyContent="center"
                    alignItems="left"
                    width="100%"
                    maxW="1550px"
                    mx="auto"
                >
                    <Text fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} mb={{ base: 6, md: 8 }}>Proof / Key Statistics</Text>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 10 }}>
                        <Statistic statisticLabel={s1} statisticImage={s1Image}/>
                        <Statistic statisticLabel={s2} statisticImage={s2Image}/>
                        <Statistic statisticLabel={s3} statisticImage={s3Image}/>
                        <Statistic statisticLabel={s4} statisticImage={s4Image}/>
                    </SimpleGrid>
                </Flex>
            </Box>
        </Box>
    );
}