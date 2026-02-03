import { Flex, Text, Image } from "@chakra-ui/react";

export default function Header({ programName, programImage }) {
    return (
        <Flex
            bg="rgb(184,184,184)"
            height="385px"
            justifyContent="center"
            alignItems="center"
        >
            <Flex
                height="385px"          
                justifyContent="space-between"
                alignItems="center"
                width="1750px"
            >
                <Text
                    flex="1"
                    fontSize="7xl"
                    maxW="600px"
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
                >
                    <Image src={programImage}></Image>    
                </Flex>
            </Flex>
        </Flex>
    );
}