import { Box, Flex, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import SubteamSection from "../../ui/SubteamSection";
import placeholder from "../../../assets/logoplaceholder.png";

export default function OurPeople() {
    return (
        <Box>
            {/* Text Box */}
            <Flex
                width="750px"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                gap="4"
                mx="auto"
            >
                <VStack spacing="1" alignItems="center" justifyContent="center" textAlign="center">
                    <Text fontSize="6xl" mb="5">Our People</Text>
                    <Text fontSize="xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum.
                    </Text>
                </VStack>
            </Flex>

            {/* The People */}
            <Flex
                width="1600px"
                alignItems="spaceBetween"
                justifyContent="center"
                flexDirection="column"
                gap="4"
                mx="auto"
                my="50px"
            >
                <SimpleGrid columns={3} spacing="10">
                    <SubteamSection src={placeholder} whoText="Our Board" buttonText="Find Out More"></SubteamSection>
                    <SubteamSection src={placeholder} whoText="Our Team" buttonText="Find Out More"></SubteamSection>
                    <SubteamSection src={placeholder} whoText="Our Partners" buttonText="Find Out More"></SubteamSection>
                </SimpleGrid>
            </Flex>
        </Box>
    );
}