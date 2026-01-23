import { Box, Flex, Text, VStack, SimpleGrid } from "@chakra-ui/react"

export default function GetInvolved() {
    return (
        <Box
            as="section"
            bg="rgb(255, 255, 255)"
            width="100%"
            height="1000px"
            p="20"
        >
            <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Box
                    bg="rgb(200, 200, 200)"
                    width="1124px"
                    height="529px"
                    border="1.5px solid"
                >
                    {/* Header */}
                    <VStack spacing="10" textAlign="center"  mt="120">
                        <Text fontSize="5xl" fontWeight="bold" lineHeight="1.05">
                            Join Our Mission.
                        </Text>
                    </VStack>
                    {/* Row of Cards */}
                    <SimpleGrid columns={3} spacing="220px" mt="50" mb="30">

                    </SimpleGrid>
                </Box>
            </Flex>
        </Box>
    );
}