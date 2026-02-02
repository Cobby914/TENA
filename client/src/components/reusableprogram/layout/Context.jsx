import { Flex, VStack, Text, Image } from "@chakra-ui/react";

export default function Context({ problemStatement, solutionDescription1, solutionDescription2, problemImage}) {
    return (
        <Flex
            height="1000px"
            justifyContent="center"
            alignItems="center"
        >
            <Flex
                height="1000px"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                width="1550px"
            >
                <Text
                    fontSize="5xl"
                    lineHeight="1.1"
                    width="1550px"
                >
                    Problem/What we are doing:<br/>{problemStatement}
                </Text>
                <Flex
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    width="1550px"
                    pt="75px"
                >
                    <VStack>
                        <Text fontSize="3xl" width="750px" lineHeight="1.3" fontWeight="normal">
                            Description of Project/solution:<br/>{solutionDescription1}<br/><br/>{solutionDescription2}
                        </Text>
                    </VStack>

                    <Flex>
                        <Image src={problemImage}></Image>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}