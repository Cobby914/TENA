import { Box, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";

export default function GetInvolvedCard ({
    title,
    description,
    variant = "learnMore",
}) {
    return (
        <Box
            bg="rgb(217, 217, 217)"
            width="100%"
            maxW="1100px"
            mx="auto"
            px={{ base: 6, md: 10, lg: 14 }}
            py={{ base: 8, md: 10, lg: 12 }}
        >
            <Flex direction={{ base: "column", lg: "row" }} gap={{ base: 6, md: 10, lg: 14 }} alignItems="flex-start">
                <Flex  
                    width={{ base: "100%", lg: "320px" }}
                    height={{ base: "220px", md: "240px", lg: "260px" }}
                    bg="rgb(245, 245, 245)"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                >
                    <Text fontSize={{ base: "2xl", md: "3xl" }}>IMG</Text>
                </Flex>
                <VStack alignItems="flex-start" spacing={{ base: 3, md: 4 }} width="100%">
                    <Text fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} fontWeight="bold">
                        {title}
                    </Text>
                    <Text fontSize={{ base: "sm", md: "md" }} lineHeight="1.6" maxW={{ lg: "560px" }}>
                        {description}
                    </Text>
                    {variant === "donations" ? (
                        <HStack 
                            spacing={{ base: 3, md: 4, lg: 6 }} 
                            pt={{ base: 4, md: 6 }} 
                            justifyContent="center" 
                            width="100%"
                            flexWrap="wrap"
                        >
                            {["5 dollars", "25 dollars", "100 dollars", "Other"].map((label) => (
                                <Button
                                    key={label}
                                    bg="rgb(239,239,239)"
                                    borderRadius="none"
                                    fontWeight="normal"
                                    height={{ base: "32px", md: "34px" }}
                                    px={{ base: 4, md: 6 }}
                                    fontSize={{ base: "sm", md: "md" }}
                                >
                                    {label}
                                </Button>
                            ))}
                        </HStack>
                    ) : (
                        <Flex width="100%" justifyContent={{ base: "center", lg: "flex-end" }} pt={{ base: 6, md: 8, lg: 10 }}>
                            <Button
                                bg="rgb(239, 239, 239)"
                                borderRadius="none"
                                fontWeight="normal"
                                height={{ base: "38px", md: "40px" }}
                                px={{ base: 8, md: 10 }}
                                fontSize={{ base: "sm", md: "md" }}
                            >
                                Learn more →
                            </Button>
                        </Flex>
                    )}
                </VStack>
            </Flex>
        </Box>
    );
}