import { Text, Box, Flex, VStack, Button } from "@chakra-ui/react";

export default function WhoWeAre() {
    return (
        <Box
            as="section"
            bg="rgb(184, 184, 184)"
            width="100%"
            py={{ base: 8, md: 12, lg: 16 }}
        >
            <Box
                maxW="2500px"
                mx="auto"
                px={{ base: 4, md: 10, lg: 20 }}
            >
                <Flex direction="column" alignItems="flex-start" maxW="950px">
                    <Text fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }} fontWeight="normal" mb={{ base: 4, md: 6 }}>
                        Who We Are
                    </Text>
                    <VStack spacing={{ base: 4, md: 6 }} alignItems="flex-start" mb={{ base: 6, md: 10 }}>
                        <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.35">
                            TENA is a community-centric nonprofit building ecosystems that empower underserved communities to overcome systemic barriers 
                            through optimizing access to resources, knowledge, and entry to healthcare professions.
                        </Text>
                        <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.35">
                            TENA recognizes that access to quality healthcare, resources, and health education can be difficult to obtain in many
                            communities, and works hard to bridge this gap. Composed primarily of Los Angeles County natives, the team draws upon the 
                            social determinants of health to provide services that support the health and wellness of their neighborhoods and beyond. 
                            TENA believes in empowering others to have the tools, knowledge, and resources they need to live a healthy and enriched life.
                        </Text>
                    </VStack>
                    <Button
                        bg="white"
                        color="black"
                        fontWeight="normal"
                        borderRadius="none"
                        height={{ base: "60px", md: "70px" }}
                        width={{ base: "180px", md: "220px" }}
                        fontSize={{ base: "md", md: "lg" }}
                    >
                        Find Out More
                    </Button>
                </Flex>
            </Box>
        </Box>
    );
}