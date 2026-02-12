import { Text, Box, Flex, VStack, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import ImagePlaceholder from "../../ui/MVimagePH";

export default function MissionAndVision() {
    return (
        <Box
            as="section"
            bg="white"
            width="100%"
            py={{ base: 10, md: 16, lg: 20 }}
        >
            <Box
                maxW="1800px"
                mx="auto"
                px={{ base: 4, md: 10, lg: 24 }}
            >
                <VStack spacing={{ base: 12, md: 18, lg: 24 }} alignItems="stretch">
                    <Flex direction={{ base: "column", lg: "row" }} align="center" gap={{ base: 8, md: 12, lg: 20 }}>
                        <Box flex="1" maxW={{ lg: "600px" }} width="100%">
                            <Text fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} mb={{ base: 3, md: 4 }}>
                                Our Mission
                            </Text>
                            <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.35" mb={{ base: 6, md: 8 }}>
                                To eradicate health disparities by empowering underrepresented individuals, building a diverse healthcare workforce, and connecting 
                                communities to resources, care, and opportunities that promote lifelong wellness
                            </Text>
                            <Button
                                bg="rgb(245, 245, 245)"
                                color="black"
                                borderRadius="none"
                                height={{ base: "55px", md: "60px" }}
                                width={{ base: "220px", md: "260px" }}
                                fontSize={{ base: "sm", md: "md" }}
                                whiteSpace="normal"
                            />
                                Get Involved/
                                <br />
                                Join the movement
                            {/* Button */}
                            <NavLink to="/getInvolved">
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
                            </NavLink>

                        </Box>
                        <Box flex="1" width="100%">
                            <ImagePlaceholder label="IMG" />
                        </Box>
                    </Flex>

                    <Flex direction={{ base: "column-reverse", lg: "row" }} align="center" gap={{ base: 8, md: 12, lg: 20 }}>
                        <Box flex="1" width="100%">
                            <ImagePlaceholder label="IMG" />
                        </Box>
                        <Box flex="1" maxW={{ lg: "600px" }} width="100%">
                            <Text fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} mb={{ base: 3, md: 4 }}>
                                Our Vision
                            </Text>
                            <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.35">
                                All people achieving their highest health and wellness
                            </Text>
                        </Box>
                    </Flex>
                </VStack>
            </Box>
        </Box>
    );
}