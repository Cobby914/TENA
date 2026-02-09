import { Flex, Text, Image } from "@chakra-ui/react"

export default function Statistic({ statisticLabel, statisticImage }) {
    return (
        <Flex
            flexDirection="column"
        >
            <Image width={{ base: "200px", md: "225px", lg: "250px" }} src={statisticImage}/>
            <Text fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>{statisticLabel}</Text>
        </Flex>
    );
}