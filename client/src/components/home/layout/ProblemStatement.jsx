import { Text, Box, Flex, VStack } from "@chakra-ui/react";
import Button from "../../ui/Button";
import { NavLink } from "react-router-dom";

export default function ProblemStatement() {
    return (
        <Box
            as="section"
            bg="rgb(217, 217, 217)"
            width="100%"
            py={{ base: 8, md: 12, lg: 16 }}
            minHeight={{ base: "auto", lg: "600px" }}
        >
            <Box
                maxW="2500px"
                mx="auto"
                px={{ base: 4, md: 10, lg: 20 }}
            >  
                {/* Top 2 Column Content*/}
                <Flex 
                    justifyContent="space-between" 
                    alignItems="flex-start"
                    direction={{ base: "column", lg: "row" }}
                    gap={{ base: 8, md: 10, lg: 0 }}
                >
                    {/*The Challenge*/}
                    <Box 
                        width={{ base: "100%", lg: "600px" }} 
                        display="flex" 
                        flexDirection="column"
                    >
                        <Text 
                            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} 
                            mb={{ base: 3, md: 4 }}
                        >
                            The Challenge
                        </Text>

                        <Text 
                            fontSize={{ base: "md", md: "lg", lg: "xl" }} 
                            lineHeight="1.4" 
                            mb={{ base: 6, md: 8, lg: 10 }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat.
                        </Text>

                        <Button>The Impact</Button>
                    </Box>

                    {/*TENA Solution */}
                    <Box 
                        width={{ base: "100%", lg: "700px" }} 
                        display="flex" 
                        flexDirection="column"
                    />
                        <Text 
                            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} 
                            mb={{ base: 1, md: 2 }}
                        >
                            TENA "Solution"
                        </Text>

                        <Text 
                            fontSize={{ base: "md", md: "lg", lg: "xl" }} 
                            letterSpacing="wide" 
                            mb={{ base: 6, md: 8, lg: 12 }}
                        >
                            PROGRAM OVERALL SUMMARY
                        </Text>

                        {/*About Us Button*/}
                        <Box mt={{ base: 0, lg: 20 }}>
                            <Button>About Us</Button>
                        </Box>
                    {/*About Us Button*/}
                    <Box mt="20">
                        <NavLink to="/about">
                            <Button>About Us</Button>
                        </NavLink>
                    </Box>
                </Flex>

                {/*What We Do + arrow*/}
                <VStack 
                    spacing={{ base: 1, md: 2 }} 
                    mt={{ base: 10, md: 12, lg: 14 }} 
                    textAlign="center"
                >
                    <Text fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
                        What we do
                    </Text>
                    <Text 
                        fontSize={{ base: "sm", md: "md", lg: "lg" }} 
                        opacity="0.5"
                    >
                        subway:do...
                    </Text>

                    <Text 
                        fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }} 
                        lineHeight="1"
                    >
                        ↓
                    </Text>
                </VStack>
            </Box>
        </Box>
    );
}