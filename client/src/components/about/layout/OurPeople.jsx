import { Box, Flex, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import SubteamSection from "../../ui/SubteamSection";
import placeholder from "../../../assets/logoplaceholder.png";
import Board from "../../../pages/Board"

import OurBoardPNG from "../../../assets/OurBoard.png";
import OurTeamPNG from "../../../assets/OurTeam.png";
import OurPartnersPNG from "../../../assets/OurPartners.png";

export default function OurPeople() {
    return (
        <Box py={{ base: 8, md: 12, lg: 16 }} bg = "#F1F4F8" zIndex = "-0.5">
            <Box
                maxW="2500px"
                mx="auto"
                px={{ base: 4, md: 10, lg: 20 }}
                zIndex = "-0.5"
            >
                <Flex
                    maxW="750px"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    gap={{ base: 3, md: 4 }}
                    mx="auto"
                >
                    <VStack spacing="1" alignItems="center" justifyContent="center" textAlign="center">
                        <Text fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }} mb={{ base: 3, md: 5 }} fontFamily = "INTER" fontWeight = "700" color = "#1573CF">Our People</Text>
                        <Text fontSize={{ base: "md", md: "lg", lg: "xl" }} fontFamily = "INTER" fontWeight = "400" color = "#3F5F85">
Our staff, board, and partners bring lived experience, professional expertise, and deep community commitment to everything we do.                           </Text>
                    </VStack>
                </Flex>

                <SimpleGrid 
                    columns={{ base: 1, md: 3 }} 
                    spacing={{ base: 8, md: 10 }}
                    maxW="1600px"
                    mx="auto"
                    my={{ base: "30px", md: "40px", lg: "50px" }}
                >
                    <SubteamSection link={"/board"} src={OurBoardPNG} whoText="Our Board" buttonText="Find Out More >"></SubteamSection>
                    <SubteamSection link={"/team"} src={OurTeamPNG} whoText="Our Team" buttonText="Find Out More >"></SubteamSection>
                    <SubteamSection link={"/partners"} src={OurPartnersPNG} whoText="Our Partners" buttonText="Find Out More >"></SubteamSection>
                </SimpleGrid>
            </Box>
        </Box>
    );
}