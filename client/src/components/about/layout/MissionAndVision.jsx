import { Text, Box, Flex, VStack, Button } from "@chakra-ui/react";
import ImagePlaceholder from "../../ui/MVimagePH";

export default function MissionAndVision() {
    return (
        <Box //Section Padding to Center Components
            as="section"
            bg="white"
            width="100%"
            px="24"
            py="20"
        >
            {/* Centered Page */}
            <Box maxW="1400px" mx="auto">
                <VStack spacing="24" alignItems="stretch">
                    {/* Our Mission + ImagePH */}
                    <Flex align="center" gap="80">
                        <Box flex="1">
                            <Text fontSize="5xl" mb="4">
                                Our Mission
                            </Text>
                            {/* Our Mission Description */}
                            <Text fontSize="lg" lineHeight="1.35" mb="8">
                                To eradicate health disparities by empowering underrepresented individuals, building a diverse healthcare workforce, and connecting 
                                communities to resources, care, and opportunities that promote lifelong wellness
                            </Text>
                            {/* Button */}
                            <Button
                                bg="rgb(245, 245, 245)"
                                color="black"
                                borderRadius="none"
                                height="60px"
                                width="260px"
                                whiteSpace="normal"
                            >
                                Get Involved/
                                <br />
                                Join the movement
                            </Button>
                        </Box>
                        {/* Image Placeholder */}
                        <Box flex="1">
                            <ImagePlaceholder label="IMG" />
                        </Box>
                    </Flex>

                    {/* Our Vision + Image PH */}
                    <Flex allign="center" gap="80px">
                        <Box flex="1">
                            <ImagePlaceholder label="IMG" />
                        </Box>
                        {/* Header + Text */}
                        <Box flex="1">
                            <Text fontSize="5xl" mb="mb">
                                Our Vision
                            </Text>
                            <Text fontSize="lg" lineHeight="1.35">
                                All people achieving their highest health and wellness
                            </Text>
                        </Box>
                    </Flex>
                </VStack>
            </Box>
        </Box>
    );
}