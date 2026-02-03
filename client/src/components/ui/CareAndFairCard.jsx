import {Text, Image, Box, Grid, GridItem, Button, VStack } from "@chakra-ui/react"
import ImagePlaceholder from "./MVimagePH";

export default function CareAndFairCard ({
    title,
    description,
    imageSrc,
    link="",
    reversed=false
}) {
    return(
        <Grid
            templateColumns="repeat(2, 1fr)"
            alignItems={reversed ? "left" : "right"}
            height="324px"
            width="full"
        >
            {/* Image */}
            <GridItem
                order={reversed ? 2 : 1}
                width="90%"
                justifySelf={reversed ? "end" : "start"}
            >
                <ImagePlaceholder height="100%" width="100%"></ImagePlaceholder>
            </GridItem>

            <GridItem
                pl={reversed ? 0 : 20}
                pr={reversed ? 20 : 0}
                order={reversed ? 1 : 2}
                
            >
                <VStack h="full" align={reversed ? "end" : "start"} justifyContent="space-between">
                    <Box textAlign={reversed ? "right" : "left"}>
                        {/* Title */}
                        <Text fontSize={40} fontWeight={400}>
                            {title}
                        </Text>
                        {/* Description */}
                        <Text mt={5} fontSize={20} lineHeight={1.25}>
                            {description}
                        </Text>
                    </Box>

                    {/* Button */}
                    <Button borderRadius={0} p={7} rightIcon={<Text>→</Text>} background="rgb(245,245,245)">
                        <Text>Explore Program</Text>
                    </Button>
                </VStack>
            </GridItem>
        </Grid>
    );
}