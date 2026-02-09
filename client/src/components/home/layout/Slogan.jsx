import { Box, Flex, VStack, Text } from "@chakra-ui/react";
import Button from "../../ui/Button";

export default function Slogan() {
    return (
        <Box
            as="section"
            width="100%"
            bg="rgb(184, 184, 184)"
            py={{ base: 8, md: 12, lg: 0 }}
            minHeight={{ base: "auto", lg: "600px" }}
        >
            <Box
                maxW="2500px"
                mx="auto"
                px={{ base: 4, md: 10, lg: 20 }}
            >  
                <Flex
                    width={{ base: "100%", lg: "800px" }}
                    alignItems="left"
                    justifyContent="center"
                    flexDirection="column"
                    gap={{ base: 3, md: 4 }}
                >
                    <VStack spacing={{ base: 1, md: 1 }} alignItems="left">
                        <Text 
                            fontSize={{ base: "4xl", sm: "5xl", md: "6xl", lg: "8xl" }} 
                            mb={{ base: "-3", md: "-5", lg: "-7" }}
                        >
                            TENA SLOGAN
                        </Text>
                        <Text 
                            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "7xl" }} 
                            mb={{ base: 3, md: 4, lg: 5 }}
                        >
                            Create.Connect.Empower
                        </Text>
                        <Text 
                            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                        >
                            Why you should help?
                        </Text>
                        <Text 
                            fontSize={{ base: "md", md: "lg", lg: "xl" }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.
                        </Text>
                    </VStack>
                    <Button>Donate</Button>
                </Flex>
            </Box>
        </Box>
    );
}