import { Flex, Box, VStack, Image, Text } from "@chakra-ui/react";

export default function ValueIcon({ src, labelText }) {
    return (
        <Flex height="350px" width="350px" bgColor="rgb(217, 217, 217)">
            <VStack spacing="0" height="100%" width="100%">
                <Box flex="1" width="100%" display="flex" alignItems="center" justifyContent="center">
                    <Image width="290px" height="290px" src={src} objectFit="contain"></Image>
                </Box>

                <Box width="100%" px="3">
                    <Text mb="2" fontSize="4xl" textAlign="left">{labelText}</Text>
                </Box>
            </VStack>
        </Flex>
    );
}