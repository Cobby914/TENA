import { Box, Flex, Text, Grid, SimpleGrid, GridItem } from "@chakra-ui/react"
import InvolvementCard from "../ui/InvolvementCard";

export default function GetInvolved() {
    return (
        <Box
            as="section"
            bg="rgb(255, 255, 255)"
            width="100%"
            height="1000px"
            p="20"
        >
            <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Box
                    bg="#D9D9D9"
                    width="1124px"
                    height="529px"
                    border="1px solid"
                    
                >
                <SimpleGrid rows = {2} columns = {3}>
                    {/* Add links to buttons when applicable*/}
                    <GridItem colSpan={3} rowSpan = {1}>
                            <Text align = "center" fontWeight = "bold" fontSize= "5xl">Join Our Mission.</Text>
                    </GridItem>
                    

                    <InvolvementCard title="Volunteer"
                                    description="Lend your time at our events"
                                    linkname="Volunteer With Us"
                                    
                    /> {/* Aligned at 65 pixels right of box left edge*/}

                    <InvolvementCard title="Partner"
                                    description="Collaborate with us to expand our reach."
                                    linkname = "Become a Partner"
                    />

                    <InvolvementCard title="Donate"
                                    description="Your financial report fuels our mission"
                                    linkname="Support our Cause"
                     />
                     {/*Right edge of button aligned at 89 pixels from box right edge*/}

                </SimpleGrid>
                    
                </Box>
            </Flex>
        </Box>
    );
}
