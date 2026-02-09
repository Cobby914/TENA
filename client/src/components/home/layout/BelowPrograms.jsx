import { Box, Flex, Text, VStack, SimpleGrid, Button } from "@chakra-ui/react";
import IconBlock from "../../ui/IconBlock";

export default function BelowPrograms() {
    return (
        <Box
            as="section"
            bg="rgb(255, 255, 255)"
            width="100%"
            py={{ base: 8, md: 12, lg: 16 }}
            minHeight={{ base: "auto", lg: "1100px" }}
        >
            <Box
                maxW="2500px"
                mx="auto"
                px={{ base: 4, md: 10, lg: 20 }}
            >
                <Flex direction="column" alignItems="center" justifyContent="center">
                    {/* Title */}
                    <VStack 
                        spacing={{ base: 6, md: 8, lg: 10 }} 
                        textAlign="center" 
                        maxW="1200px" 
                        mt={{ base: 6, md: 8, lg: 10 }}
                    >
                        <Text 
                            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "7xl" }} 
                            fontWeight="normal" 
                            lineHeight="1.05"
                        >
                            A community driven non-profit 
                            <br />
                            focused on a lasting health equity.
                        </Text>
                        {/*Paragraph*/}
                        <Text 
                            fontSize={{ base: "md", md: "lg", lg: "xl" }} 
                            lineHeight="1.6" 
                            maxW="900px"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et 
                            dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                            ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  
                            mollit anim id est laborum.
                        </Text>
                    </VStack>
                    {/* Icon Rows */}
                    <SimpleGrid 
                        columns={{ base: 1, md: 3 }} 
                        spacing={{ base: 10, md: 20, lg: "220px" }} 
                        mt={{ base: 12, md: 16, lg: 24 }} 
                        mb={{ base: 12, md: 16, lg: 24 }}
                    >
                        <IconBlock />
                        <IconBlock />
                        <IconBlock />
                    </SimpleGrid>
                    {/* About Us Button */}
                    <Button
                        bg="rgb(217, 217, 217)"
                        color="black"
                        fontWeight="bold"
                        borderRadius="none"
                        height={{ base: "60px", md: "65px", lg: "70px" }}
                        width={{ base: "220px", md: "240px", lg: "260px" }}
                        fontSize={{ base: "md", md: "lg" }}
                    >
                        About Us
                    </Button>
                </Flex>
            </Box>
        </Box>
    );
}