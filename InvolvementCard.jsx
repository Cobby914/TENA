import { Card, Grid, GridItem, Text, Button } from "@chakra-ui/react";



export default function InvolvementCard({
    title, description, linkname, link
} 
){
    return (
        
        <Card 
        bg="#D9D9D9" width = "370px" height = "329px" borderColor= "#D9D9D9"  >
        {/* No borders so the card is flush with the background */}

            <Grid templateRows="1fr 1fr" h="100%">
                 {/* Title */} 
                <GridItem align = "center">
                    <Text fontWeight = "Bold" fontSize= "3xl">{title}</Text>
                </GridItem>

                {/* Description */}
                <GridItem align = "center">
                    <Text fontsize = "xl" fontWeight = "regular">{description}</Text>
                </GridItem>


                {/* Button for Links */}
                <GridItem align = "center">

                    <Button bg = "#B8B8B8" color = "#000000" width = "225px" height = "56px">
                    <Text textSize = "24px" fontWeight = "bold">
                        {linkname}
                    </Text>
                        
                    </Button>

                </GridItem>

            </Grid>

        </Card>
    );
}


