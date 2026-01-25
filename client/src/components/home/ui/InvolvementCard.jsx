import { Card, Grid, GridItem, Text, Button, SimpleGrid } from "@chakra-ui/react";



export default function InvolvementCard({
    title, description, linkname, link
} 
){
    return (
        
        <Card 
        bg="#D9D9D9" width = "220px" height = "220px" borderColor= "#D9D9D9" shadow={false}>
        {/* No borders so the card is flush with the background */}

            <SimpleGrid h="100%">
                 {/* Title */} 
                <GridItem align = "left">
                    <Text fontWeight={700} fontSize={35}>{title}</Text>
                </GridItem>

                {/* Description */}
                <GridItem align = "left">
                    <Text fontSize={23} fontWeight={400} lineHeight={1} mt={1}>{description}</Text>
                </GridItem>

                {/* Button for Links */}
                <GridItem align = "center">
                    <Button bg = "#B8B8B8" color = "#000000" width = "100%" height = "56px" borderRadius={0} mt={5}>
                        <Text fontSize={22} fontWeight = "bold">
                            {linkname}
                        </Text>
                    </Button>
                </GridItem>

            </SimpleGrid>

        </Card>
    );
}


