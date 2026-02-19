import {Text, Box, Flex, Button, VStack } from "@chakra-ui/react"
import ImagePlaceholder from "./MVimagePH";

export default function CareAndFairCard ({
    title,
    description,
    imageSrc,
    link="",
    reversed=false
}) {
    return(
        <Flex
            direction={{ base: "column", lg: reversed ? "row-reverse" : "row" }}
            alignItems="center"
            gap={{ base: 6, md: 8, lg: 12 }}
            width="100%"
        >
            <Box
                flex="1"
                width="100%"
            >
                <ImagePlaceholder height={{ base: "250px", md: "280px", lg: "324px" }} width="100%"></ImagePlaceholder>
            </Box>

            <Box
                flex="1"
                width="100%"
            >
                <VStack h="full" align={{ base: "center", lg: reversed ? "end" : "start" }} justifyContent="space-between" spacing={{ base: 6, md: 8 }}>
                    <Box textAlign={{ base: "center", lg: reversed ? "right" : "left" }} width="100%">
                        <Text fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} fontWeight={400}>
                            {title}
                        </Text>
                        <Text mt={{ base: 3, md: 5 }} fontSize={{ base: "md", md: "lg", lg: "xl" }} lineHeight={1.25}>
                            {description}
                        </Text>
                    </Box>

                    <Button 
                        borderRadius={0} 
                        p={{ base: 5, md: 6, lg: 7 }} 
                        rightIcon={<Text>→</Text>} 
                        background="rgb(245,245,245)"
                        fontSize={{ base: "sm", md: "md" }}
                    >
                        <Text>Explore Program</Text>
                    </Button>
                </VStack>
            </Box>
        </Flex>
    );
}