import { Text, Box, Flex, VStack, Button, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import ImagePlaceholder from "../../ui/MVimagePH";

import OurVision from "../../../assets/AboutUs-OurVision.jpg";
import OurMission from "../../../assets/AboutUs-OurMission.jpg";

export default function MissionAndVision() {
    return (
        <Box
            as="section"
            bg="white"
            width="100%"
            py={{ base: 10, md: 16, lg: 20 }}
            position="relative"
            zIndex = "1"
            
        >
            <Box
                maxW="1800px"
                mx="auto"
                px={{ base: 4, md: 10, lg: 24 }}
                position="relative"
                zIndex = "3"
            >
                <VStack spacing={{ base: 12, md: 18, lg: 24 }} alignItems="stretch">
                    <Flex direction={{ base: "column", lg: "row" }} align="center" gap={{ base: 8, md: 12, lg: 20 }}>
                        <Box flex="1" maxW={{ lg: "600px" }} width="100%" align = "right">
                            <Text fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} mb={{ base: 3, md: 4 }} fontFamily = "INTER" color = "#1573CF">
                                Our Goal
                            </Text>
                            <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.35" mb={{ base: 6, md: 8 }} fontFamily = "INTER" color = "#3F5F85">
Today, TENA continues to grow as a community-anchored nonprofit tackling inequities through programs that are responsive, evidence-informed, and rooted in human dignity.                            </Text>
                            <NavLink to="/getInvolved">
                            <Button
                                bg="#5CDAC5"
                                color=""
                                borderRadius="none"
                                height={{ base: "55px", md: "60px" }}
                                width={{ base: "160px", md: "185px"}}
                                fontSize={{ base: "sm", md: "md" }}
                                whiteSpace="normal"
                                rounded = {{base: "3", md: "6"}}
                                fontFamily = "INTER"
                                fontWeight = "600"
                            >
                                Get Involved
                            </Button>
                            </NavLink>

                        </Box>
                        <Box flex="1" width="100%">
                            <Image src={OurVision}/>
                        </Box>
                    </Flex>

                    <Flex direction={{ base: "column-reverse", lg: "row" }} align="center" gap={{ base: 8, md: 12, lg: 20 }}>
                        <Box flex="1" width="100%">
                            <Image src = {OurMission}/>
                        </Box>
                        <Box flex="1" maxW={{ lg: "600px" }} width="100%">
                            <Text fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} mb={{ base: 3, md: 4 }} fontFamily = "INTER" color = "#1573CF">
                                Our Mission
                            </Text>
                            <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.35" mb={{ base: 6, md: 8 }}  fontFamily = "INTER"  color = "#3F5F85">
                                To eradicate health disparities by empowering underrepresented individuals, building a diverse healthcare workforce, and connecting communities to resources, care, and opportunities that promote lifelong wellness
                            </Text>
                            <NavLink to="/home">
                            <Button
                                bg="#5CDAC5"
                                color=""
                                borderRadius="none"
                                height={{ base: "55px", md: "60px" }}
                                width={{ base: "160px", md: "185px" }}
                                fontSize={{ base: "sm", md: "md" }}
                                whiteSpace="normal"
                                rounded = {{base: "3", md: "6"}}
                                fontFamily = "INTER"
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