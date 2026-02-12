import { Box, Flex, Text, SimpleGrid } from "@chakra-ui/react"
import InvolvementCard from "../ui/InvolvementCard";

export default function GetInvolved() {
    return (
        <Box
            as="section"
            bg="rgb(255, 255, 255)"
            width="100%"
            minHeight={{ base: "auto", lg: "1000px" }}
            py={{ base: 8, md: 12, lg: 20 }}
        >
            <Box
                maxW="2500px"
                mx="auto"
                px={{ base: 4, md: 10, lg: 20 }}
            >
                <Flex
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box
                        bg="#D9D9D9"
                        width={{ base: "100%", lg: "1124px" }}
                        maxW="100%"
                        minH={{ base: "auto", lg: "529px" }}
                        border="1.5px solid"  
                        p={{ base: 6, md: 10, lg: 12 }}
                    >
                        <Text 
                            align="center" 
                            fontWeight="bold" 
                            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} 
                            mt={{ base: 6, md: 10, lg: 12 }}
                        >
                            Join Our Mission.
                        </Text>

                        <SimpleGrid 
                            columns={{ base: 1, md: 3 }} 
                            spacing={{ base: 8, md: 10, lg: "120px" }} 
                            mt={{ base: 6, md: 8, lg: 10 }} 
                            mx={{ base: 0, lg: 12 }}
                            mb={{ base: 6, md: 10, lg: 20 }}
                        >
                            <InvolvementCard 
                                title="Volunteer"
                                description="Lend your time at our events."
                                linkname="Volunteer With Us"
                            />

                            <InvolvementCard 
                                title="Partner"
                                description="Collaborate with us to expand our reach."
                                linkname="Become a Partner"
                            />

                            <InvolvementCard 
                                title="Donate"
                                description="Your financial report fuels our mission."
                                linkname="Support our Cause"
                            />
                        </SimpleGrid>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}