import { Text, Box, Flex, VStack } from "@chakra-ui/react";
import Button from "../../ui/Button";

export default function ProblemStatement() {
    return (
        <Box
            as="section"
            bg="rgb(217, 217, 217)" //Light Gray Section
            width="100%"
            px="20"
            py="16"
            height="600px"
        >
            {/* Top 2 Column Content*/}
            <Flex justifyContent="space-between" alignItem="flex-start">
                {/*The Challenge*/}
                <Box width="600px" display="flex" flexDirection="column">
                    <Text fontSize="5xl" mb="4">
                        The Challenge
                    </Text>

                    <Text fontSize="xl" lineHeight="1.4" mb="10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat.
                    </Text>

                    <Button>The Impact</Button>
                </Box>

                {/*TENA Solution */}
                <Box width="700px" display="flex" flexDirection="column">
                    <Text fontSize="5xl" mb="2">
                        TENA "Solution"
                    </Text>

                    <Text fontSize="xl" letterSpacing="wide" mb="12">
                        PROGRAM OVERALL SUMMARY
                    </Text>

                    {/*About Us Button*/}
                    <Box mt="20">
                        <Button>About Us</Button>
                    </Box>
                </Box>
            </Flex>

            {/*What We Do + arrow*/}
            <VStack spacing="2" mt="14" textAlign="center">
                <Text fontSize="4xl">What we do</Text>
                <Text fontSize="lg" opacity="0.5">
                    subway:do...
                </Text>

                <Text fontSize="7xl" lineHeight="1">
                    ↓
                </Text>
            </VStack>
        </Box>
    );
}