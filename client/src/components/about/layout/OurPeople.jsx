import { Box, Flex, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import SubteamSection from "../../ui/SubteamSection";

const OurBoardPNG = "/AboutUs/People/OurBoard.png";
const OurTeamPNG = "/AboutUs/People/OurTeam.png";
const OurPartnersPNG = "/AboutUs/People/OurPartners.png";

export default function OurPeople() {
    return (
        <Box
            pt={{ base: 10, md: 16, lg: 20 }}
            pb={{ base: 32, md: 40, lg: 48 }}
            bg="surface.section"
            zIndex="-0.5"
        >
            <Box maxW="2500px" mx="auto" px={{ base: 4, md: 10, lg: 20 }} position="relative" zIndex="1">
                <VStack spacing={{ base: 6, md: 8, lg: 10 }} alignItems="stretch">
                    <Flex
                        maxW="750px"
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="column"
                        gap={{ base: 3, md: 4 }}
                        mx="auto"
                    >
                        <VStack
                            spacing={{ base: 2, md: 3 }}
                            alignItems="center"
                            justifyContent="center"
                            textAlign="center"
                            position="relative"
                            zIndex="3"
                        >
                            <Text
                                fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
                                mb={0}
                                fontWeight="700"
                                color="brand.primary"
                            >
                                Our People
                            </Text>
                            <Text fontSize={{ base: "md", md: "lg", lg: "xl" }} fontWeight="400" color="brand.heading">
                                Our staff, board, and partners bring lived experience, professional expertise, and deep
                                community commitment to everything we do.
                            </Text>
                        </VStack>
                    </Flex>

                    <SimpleGrid
                        columns={{ base: 3, md: 3 }}
                        spacing={{ base: 3, sm: 5, md: 20, lg: 24 }}
                        maxW="1000px"
                        mx="auto"
                        position="relative"
                        zIndex="3"
                    >
                        <SubteamSection link={"/board"} src={OurBoardPNG} whoText="Our Board" buttonText="Find Out More >" />
                        <SubteamSection link={"/team"} src={OurTeamPNG} whoText="Our Team" buttonText="Find Out More >" />
                        <SubteamSection
                            link={"/partners"}
                            src={OurPartnersPNG}
                            whoText="Our Partners"
                            buttonText="Find Out More >"
                        />
                    </SimpleGrid>
                </VStack>
            </Box>
        </Box>
    );
}