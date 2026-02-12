import { Box, Flex, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import SubteamSection from "../../ui/SubteamSection";
import placeholder from "../../../assets/logoplaceholder.png";

export default function OurPeople() {
    return (
        <Box py={{ base: 8, md: 12, lg: 16 }}>
            <Box
                maxW="2500px"
                mx="auto"
                px={{ base: 4, md: 10, lg: 20 }}
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
                        <Text fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }} mb={{ base: 3, md: 5 }}>Our People</Text>
                        <Text fontSize={{ base: "md", md: "lg", lg: "xl" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum.
                        </Text>
                    </VStack>
                </Flex>

                <SimpleGrid 
                    columns={{ base: 1, md: 3 }} 
                    spacing={{ base: 8, md: 10 }}
                    maxW="1600px"
                    mx="auto"
                    my={{ base: "30px", md: "40px", lg: "50px" }}
                >
                    <SubteamSection src={placeholder} whoText="Our Board" buttonText="Find Out More"></SubteamSection>
                    <SubteamSection src={placeholder} whoText="Our Team" buttonText="Find Out More"></SubteamSection>
                    <SubteamSection src={placeholder} whoText="Our Partners" buttonText="Find Out More"></SubteamSection>
                </SimpleGrid>
            </Box>
        </Box>
    );
}