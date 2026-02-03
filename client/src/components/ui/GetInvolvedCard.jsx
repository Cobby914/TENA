import { Box, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";

export default function GetInvolvedCard ({
    title,
    description,
    variant = "learnMore", // "donations" | "learnMore"
}) {
    return (
        <Box
            bg="rgb(217, 217, 217)"
            width="100%"
            maxW="1100px"
            mx="auto"
            px="14"
            py="12"
        >
            <Flex gap="14" alignItems="flex-start">
                {/* IMG Placeholder */}
                <Flex  
                    width="320px"
                    height="260px"
                    bg="rgb(245, 245, 245)"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                >
                    <Text fontSize="3xl">IMG</Text>
                </Flex>
                {/* Right Side Content */}
                <VStack alignItems="flex-start" spacing="4" width="100%">
                    <Text fontSize="4xl" fontWeight="bold">
                        {title}
                    </Text>
                    <Text fontSize="md" lineHeight="1.6" maxW="560px">
                        {description}
                    </Text>
                    {/* Bottom Buttons */}
                    {variant === "donations" ? (
                        <HStack spacing="6" pt="6" justifyContent="center" width="100%">
                            {["5 dollars", "25 dollars", "100 dollars", "Other"].map((label) => (
                                <Button
                                    key={label}
                                    bg="rgb(239,239,239)"
                                    borderRadius="none"
                                    fontWeight="normal"
                                    height="34px"
                                    px="6"
                                >
                                    {label}
                                </Button>
                            ))}
                        </HStack>
                    ) : (
                        <Flex width="100%" justifyContent="flex-end" pt="10">
                            <Button
                                bg="rgb(239, 239, 239)"
                                borderRadius="none"
                                fontWeight="normal"
                                height="40px"
                                px="10"
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