import { Flex, Box, VStack, Image, Text } from "@chakra-ui/react";

export default function ValueIcon({ src, labelText }) {
    return (
        <Flex height={{ base: "280px", md: "315px", lg: "350px" }} width={{ base: "280px", md: "315px", lg: "350px" }} bgColor="neutral.muted">
            <VStack spacing="0" height="100%" width="100%">
                <Box flex="1" width="100%" display="flex" alignItems="center" justifyContent="center">
                    <Image width={{ base: "230px", md: "260px", lg: "290px" }} height={{ base: "230px", md: "260px", lg: "290px" }} src={src} objectFit="contain"></Image>
                </Box>

                <Box width="100%" px="3">
                    <Text mb="2" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} textAlign="left">{labelText}</Text>
                </Box>
            </VStack>
        </Flex>
    );
}