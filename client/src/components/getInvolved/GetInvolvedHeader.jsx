import { Box, Text, VStack, Image } from "@chakra-ui/react";
import FadeInWhenVisible from "../home/ui/FadeInWhenVisible";

const Right = "/GetInvolved/vectors/HeaderRight.svg";
const Left = "/GetInvolved/vectors/HeaderLeft.svg";
const Inside = "/GetInvolved/vectors/HeaderInside.svg";

export default function GetInvolvedHeader() {
    return(
    <Box width="100%" overflow="hidden" position="relative" display = "block" maxH = "530px">
          
          <Box position="relative" width="100%" maxW="2500px" mx="auto">

        {/* Circle Overlays */}
        <Box
                position="absolute"
                right = "0px"
                top="12%"
                zIndex="2"
                pointerEvents="none"
                width={{ base: "50px", md: "95px" }}
                height={{ base: "100px", md: "262px" }}
                >

                <Image src={Right} objectFit="contain" />
            </Box>

        <Box
                position="absolute"
                
                top="40%"
                zIndex="2"
                pointerEvents="none"
                width={{ base: "50px", md: "95px" }}
                height={{ base: "100px", md: "262px" }}
                >

                <Image src={Left} objectFit="contain" />
            </Box>

        <Box
                position="absolute"
                top="52%"
                right = "32%"
                zIndex="2"
                pointerEvents="none"
                width={{ base: "50px", md: "95px" }}
                height={{ base: "100px", md: "262px" }}
                >

                <Image src={Inside} objectFit="contain" />
            </Box>
            

        
        {/* Actual Header Stuff */}
        <Box 
            as="section"
            bg="brand.navy"
            width="100%"
            align = "center"
            gap = "40px"
            height = {{base: "200px", md: "450px"}}
            pt={{ base: 10, md: 16, lg: 20 }}
            pb={{ base: 6, md: 8, lg: 10 }}
            zIndex="1"
        >
            <Box
                maxW="2500px"
                mx="auto"
                px={{ base: 4, md: 10, lg: 20 }}
            >
                <FadeInWhenVisible trigger="mount" y={16} duration={0.7}>
                <VStack spacing={{ base: 4, md: 6 }} textAlign="center" maxW="982px" mx="auto" zIndex = "3">
                    <Text fontSize ={{base: "36px", md : "72px"}} fontStyle = "normal" fontWeight = "800" lineHeight="100%" color = "brand.primary">
                        Help us 
                        <Text as = "span" fontSize ={{base: "36px", md : "72px"}} fontStyle = "normal" fontWeight = "800" lineHeight="100%" color = "brand.accent"> Out</Text>
                        . Get 
                        <Text as = "span" fontSize ={{base: "36px", md : "72px"}} fontStyle = "normal" fontWeight = "800" lineHeight="100%" color = "brand.accent"> Involved</Text>
                    </Text>
                    <Text color = "surface.soft" maxW = "982px" fontSize = {{base: "12px", md : "25px"}} fontStyle = "normal" fontWeight = "400" lineHeight="150%">
                        TENA’s work is powered by community, partnership, and shared purpose. Whether you want to give your time, support our mission, collaborate with us, or simply find help, here’s how you can be part of lasting change.
                    </Text>
                    
                </VStack>
                </FadeInWhenVisible>
            </Box>
            </Box>
    
    </Box>
    </Box>
    );
}