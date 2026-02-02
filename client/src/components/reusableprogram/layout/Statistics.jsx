import { Flex, Text, SimpleGrid } from "@chakra-ui/react";
import Statistic from "../ui/Statistic"

export default function Statistics({ s1, s1Image, s2, s2Image, s3, s3Image, s4, s4Image }) {
    return (
        <Flex
            height="750px"
            justifyContent="center"
            alignItems="center"
            py="500px"
        >
            <Flex
                flexDirection="column"
                height="750px"
                justifyContent="center"
                alignItems="left"
                width="1550px"
            >
                <Text fontSize="5xl">Proof / Key Statistics</Text>
                <SimpleGrid columns={2} spacing={10}>
                    <Statistic statisticLabel={s1} statisticImage={s1Image}/>
                    <Statistic statisticLabel={s2} statisticImage={s2Image}/>
                    <Statistic statisticLabel={s3} statisticImage={s3Image}/>
                    <Statistic statisticLabel={s4} statisticImage={s4Image}/>
                </SimpleGrid>
            </Flex>
        </Flex>
    );
}