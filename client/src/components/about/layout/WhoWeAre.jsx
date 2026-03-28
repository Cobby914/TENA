import { Text, Box, Flex, VStack, HStack, Button, Image, Circle } from "@chakra-ui/react";
import GroupPhoto from "../../../assets/SouthLACafeGroup.jpg"

export default function WhoWeAre() {
    return (
        <Box
            as="section"
            bg="rgb(184, 184, 184)"
            width="100%"
            py={{ base: 8, md: 12, lg: 16 }}
            position="relative"
            zIndex=  "1"
        >
            <Box
                maxW="2500px"
                mx="auto"
                px={{ base: 4, md: 10, lg: 20 }}
                position="relative" 
                zIndex = "3"

            >
                <HStack w = "100%">
                <Flex direction="column" alignItems="flex-start" maxW="950px">
                
                    <Text fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }} fontWeight="700" mb={{ base: 4, md: 6 }} fontFamily = "INTER" color = "#1573CF">
                        Who We Are
                    </Text>
                    <VStack spacing={{ base: 4, md: 6 }} alignItems="flex-start" mb={{ base: 6, md: 10 }}>
                        <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.35" fontFamily = "INTER" color = "#1D232E">
TENA was born from lived experience and community collaboration. What began as grassroots support for families navigating the healthcare system revealed a deeper truth: access alone is not enough without guidance, trust, and relationship.                        </Text>
                        <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.35" fontFamily = "INTER" color = "#1D232E">
TENA's founders,  inspired by community voices and driven by data, built an organization that meets people holistically blending care navigation, preventive  outreach, and workforce development in ways that truly uplift  communities                        </Text>
                        
                    </VStack>
                    
                    
                </Flex>
                <Circle as = {Image} src = {GroupPhoto} maxW = "444px" maxH = "444px"
                    width = {{base : "250px", md: "444px"}} height={{ base: "250px", md: "444px" }}
                    objectFit="cover" borderRadius="full" overflow="hidden">
                    
                </Circle>
                </HStack>
                
                
            </Box>
        </Box>
    );
}