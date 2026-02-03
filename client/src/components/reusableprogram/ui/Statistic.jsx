import { Flex, Text, Image } from "@chakra-ui/react"

export default function Statistic({ statisticLabel, statisticImage }) {
    return (
        <Flex
            flexDirection="column"
        >
            <Image width="250px" src={statisticImage}/>
            <Text fontSize="3xl">{statisticLabel}</Text>
        </Flex>
    );
}