import { Card, Grid, GridItem, Text, Button, SimpleGrid } from "@chakra-ui/react";

export default function InvolvementCard({
    title, description, linkname, link
}) {
    return (
        <Card 
            bg="#D9D9D9" 
            width={{ base: "100%", md: "220px" }}
            height={{ base: "auto", md: "220px" }}
            minH={{ base: "200px", md: "220px" }}
            borderColor="#D9D9D9" 
            shadow={false}
            p={{ base: 4, md: 0 }}
        >
            <SimpleGrid h="100%">
                {/* Title */} 
                <GridItem align="left">
                    <Text 
                        fontWeight={700} 
                        fontSize={{ base: 28, md: 30, lg: 35 }}
                    >
                        {title}
                    </Text>
                </GridItem>

                {/* Description */}
                <GridItem align="left">
                    <Text 
                        fontSize={{ base: 18, md: 20, lg: 23 }} 
                        fontWeight={400} 
                        lineHeight={1} 
                        mt={1}
                    >
                        {description}
                    </Text>
                </GridItem>

                {/* Button for Links */}
                <GridItem align="center">
                    <Button 
                        bg="#B8B8B8" 
                        color="#000000" 
                        width="100%" 
                        height={{ base: "50px", md: "56px" }} 
                        borderRadius={0} 
                        mt={{ base: 4, md: 5 }}
                    >
                        <Text 
                            fontSize={{ base: 18, md: 20, lg: 22 }} 
                            fontWeight="bold"
                        >
                            {linkname}
                        </Text>
                    </Button>
                </GridItem>
            </SimpleGrid>
        </Card>
    );
}