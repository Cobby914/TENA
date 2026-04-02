import { Text, Box, Flex, VStack, Button, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import SimpleCircle from "../../ui/SimpleCircle";

const OurVision = "/AboutUs/AboutUs-OurVision.jpg";
const OurMission = "/AboutUs/AboutUsMission.png";

export default function MissionAndVision() {
    return (
        <Box
            as="section"
            bg="surface.default"
            width="100%"
            pt={{ base: 10, md: 16, lg: 20 }}
            pb={{ base: 32, md: 40, lg: 48 }}
            position="relative"
            zIndex = "1"
        >
            <Box
                maxW="1320px"
                mx="auto"
                px={{ base: 4, md: 10, lg: 24 }}
                position="relative"
                zIndex = "3"
            >
                <VStack spacing={{ base: 8, md: 12, lg: 16 }} alignItems="stretch">
                    <Flex direction={{ base: "column", lg: "row" }} align="center" gap={{ base: 6, md: 8, lg: 12 }}>
                        <Box flex="1" maxW={{ lg: "700px" }} width="100%" align = "right">
                            <Text fontSize={{ base: "22px", md: "42px" }} mb={{ base: 3, md: 4 }} fontWeight = "700" color = "brand.primary">
                                Our Goal
                            </Text>
                            <Text fontSize={{ base: "13px", md: "22px" }} lineHeight="1.4" mb={{ base: 6, md: 8 }} fontWeight = "400" color = "brand.heading">
Today, TENA continues to grow as a community-anchored nonprofit tackling inequities through programs that are responsive, evidence-informed, and rooted in human dignity.                            </Text>
                            <NavLink to="/getInvolved">
                            <Button
                                bg="brand.primary"
                                color="surface.default"
                                borderRadius="none"
                                height={{ base: "58px", md: "66px" }}
                                width={{ base: "170px", md: "210px"}}
                                fontSize={{ base: "md", md: "lg" }}
                                whiteSpace="normal"
                                rounded = {{base: "3", md: "6"}}
                                
                                fontWeight = "600"
                            >
                                Get Involved
                            </Button>
                            </NavLink>

                        </Box>
                        <Box flex="1" width="100%" maxW={{ lg: "700px" }} position="relative">
                            <Box
                                position="absolute"
                                top="-50px"
                                right="-100px"
                                zIndex="0"
                                pointerEvents="none"
                                aria-hidden
                            >
                                <SimpleCircle
                                    size="157px"
                                    strokeWidth="20px"
                                    strokeColor="var(--color-brand-accent)"
                                    opacity={0.2}
                                />
                            </Box>
                            <Image src={OurVision} position="relative" zIndex="1" width="100%" objectFit="cover" />
                        </Box>
                    </Flex>

                    <Flex direction={{ base: "column-reverse", lg: "row" }} align="center" gap={{ base: 6, md: 8, lg: 12 }}>
                        <Box flex="1" width="100%" maxW = "1100px" maxH = "380px">
                            <Image src = {OurMission} width="100%" objectFit="contain"/>
                        </Box>
                        <Box flex="1" maxW= "700px" width="100%" maxH = "380px">
                            <Text fontSize={{ base: "22px", md: "42px" }} mb={{ base: 1, md: 2 }} fontWeight = "700" color = "brand.primary">
                                Our Mission
                            </Text>
                            <Text fontSize={{ base: "13px", md: "22px" }} lineHeight="1.5" mb={{ base: 2, md: 4 }} fontStyle = "normal"  fontWeight = "400" color = "brand.heading">
                                To eradicate health disparities by empowering underrepresented individuals, building a diverse healthcare workforce, and connecting communities to resources, care, and opportunities that promote lifelong wellness.
                            </Text>
                            <NavLink to="/home">
                                <Button
                                    bg="brand.primary"
                                    color="surface.default"
                                    borderRadius="none"
                                    height={{ base: "58px", md: "66px" }}
                                    width={{ base: "170px", md: "210px" }}
                                    fontSize={{ base: "md", md: "lg" }}
                                    whiteSpace="normal"
                                    rounded = {{base: "3", md: "6"}}
                                    fontWeight = "600"

                                >
                                    Support Us
                                </Button>
                            </NavLink>
                        </Box>
                        
                    </Flex>
                </VStack>
            </Box>
        </Box>
    );
}