import { Box, Flex, HStack, Image, VStack, Text } from "@chakra-ui/react";

import logo from "../../../assets/logoplaceholder.png";
import Newsletter from "../../ui/Newsletter";

// Still need to add the transparency seal
// Future functionality: update text to required

export default function Footer({
 children, ...props}
) {
    return (
        <Box as="section"
             bg="#FFFFFF"
             width="100vw"
             height="800px"
            >
        
            <Flex direction="column"
                justifyContent="center" 
                alignItems = "center">

                <Box background = "#B8b8b8" width = "100vw" height = "100vh" ratio = {1440/661} 
                maxWidth = "1452px" maxHeight= "661px" >
                {/* For heights and widths smaller than the max, just use the same as a ratio of our maxes */}
        
                    <HStack width = "100vw" maxWidth = "1452px" >    
                        <VStack align = "left" maxWidth = "930px" width = "65vw" maxHeight = "661px" height = "100vh">

                            {/* Logos go here */}
                            <HStack width = {{base: "clamp(20vw, 20vw, 939px)", lg: "939px"}} height = {{base: "clamp(15vh,15vh,100px)", lg: "100px"}}  marginTop = "1vh"
                                maxWidth= "300px" maxHeight =  "100px">

                                <Image src = {logo} align = "left"  ratio= {85/81} width = "6vw"
                                maxWidth = "85px" maxHeight = "81px"
                                marginLeft = {{base:"clamp(2vw,2vw,16px)", lg: "52px"}}>
                                </Image>
                                
                                {/* This will be the logo text in future, so ratio/size will still be TBD */}
                                <Image src = {logo} align = "right" width = "10vw" height = "7vh"
                                ratio = {151/55} marginLeft = {{base:"clamp(2vw,2vw,16px)", lg: "16px"}}
                                maxWidth = "151px" maxHeight = "55px">
                                </Image>
                            </HStack>

                            {/* Separator Line */}

                            <Box width = "56vw"  height = "2px" background = "#7f7f7f" marginLeft = {{base:"clamp(2vw,2vw,52px)", lg: "52px"}} marginTop = "0.5vh" maxWidth = "805px"></Box>

                            <HStack marginTop = "0.3vh" gap = "0px" maxWidth = "993px">
                                <Box marginLeft = {{base:"clamp(2vw,2vw,52px)", lg: "52px"}}>
                                    <Text fontSize={{ base: "clamp(1.5vw, 1.5vw, 25px)", lg: "20px"}} fontWeight={400} lineHeight="100%" maxWidth = "300px" width = "16vw" >Tena Foundation</Text>
                                    <Text fontSize={{ base: "clamp(1.5vw, 1.5vw, 25px)", lg: "20px"}} fontWeight={400} lineHeight="100%" maxWidth = "300px" width = "16vw">Address Line</Text>
                                    <Text fontSize={{ base: "clamp(1.5vw, 1.5vw, 25px)", lg: "20px"}} fontWeight={400} lineHeight="100%" maxWidth = "300px" width = "16vw">State</Text>
                                    <Text fontSize={{ base: "clamp(1.5vw, 1.5vw, 25px)", lg: "20px"}} fontWeight={400} lineHeight="100%" maxWidth = "300px" width = "16vw">United States</Text>
                                </Box>

                                <Box marginLeft = {{base:"clamp(3vw,3vw,70px)", lg: "70px"}}>
                                    <Text fontSize= {{ base: "2vw", md: "2vw", lg: "24px"}} fontWeight={700} lineHeight="100%" maxWidth = "100px" width = "6vw">Link 1</Text>
                                    <Text fontSize= {{ base: "2vw", md: "2vw", lg: "24px" }} fontWeight={700} lineHeight="150%" maxWidth = "100px" width = "6vw">Link 2</Text>
                                </Box>

                                <Box marginLeft = {{base:"clamp(1.2vw,1.2vw,16px)", lg: "20px"}} marginTop="2%">
                                    <Text fontSize= {{ base: "clamp(2vw, 1.2vw, 24px)", lg: "24px" }} fontWeight={700} lineHeight="100%" maxWidth = "100px" width = "6vw">Link 3</Text>
                                    <Text fontSize= {{ base: "clamp(2vw,1.2vw, 24px)", lg: "24px" }} fontWeight={700} lineHeight="150%" maxWidth = "100px" width = "6vw">Link 4</Text>
                                </Box>

                                <Box marginLeft = {{base:"clamp(3vw,3vw,104px)", lg: "104px"}} marginTop = "2vh">
                                    <Text fontSize={{ base: "clamp(1.5vw, 1.5vw, 25px)", lg: "20px"}} fontWeight={400} lineHeight="100%" maxWidth = "180px" width = "16vw">Contact Information</Text>
                                    <Text fontSize={{ base: "clamp(1.5vw, 1.5vw, 25px)", lg: "20px"}} fontWeight={400} lineHeight="100%" maxWidth = "180px" width = "16vw">Contact Information</Text>
                                    <Text fontSize={{ base: "clamp(1.5vw, 1.5vw, 25px)", lg: "20px"}} fontWeight={400} lineHeight="100%" maxWidth = "180px" width = "16vw">Contact Information</Text>
                                    <Text fontSize={{ base: "clamp(1.5vw, 1.5vw, 25px)", lg: "20px"}} fontWeight={400} lineHeight="100%" maxWidth = "180px" width = "16vw">Contact Information</Text>
                                    
                                    <HStack gap = "0px" align = "center" marginTop = "4%" width = "16vw" maxWidth = "180px"  >
                                        {/* Using Logo as placeholder */}
                                        <Image src = {logo} maxHeight = "27px" maxWidth = "27px" width = "2vw" marginLeft = {{base: "clamp(3vw,3vw,45px)", lg: "45px"}}></Image>
                                        <Image src = {logo} maxHeight = "27px" maxWidth = "27px"  marginLeft = {{base: "clamp(0.4vw,0.4vw,3px)", lg: "3px"}} marginRight = {{base: "clamp(0.4vw,0.4vw,3px)", lg: "3px"}} width = "2vw"></Image>
                                        <Image src = {logo} maxHeight = "27px" maxWidth = "27px" width = "2vw"></Image>
                                    </HStack>
                                </Box>

                            </HStack>

                            <Box>
                                <Text marginLeft = {{base:"clamp(2vw,2vw,52px)", lg: "52px"}}marginTop = "2%" fontSize={{ base: "clamp(1.2vw, 1.2vw,18px)",lg: "18px" }}>Additional information</Text>
                                <Text marginLeft = {{base:"clamp(2vw,2vw,52px)", lg: "52px"}} width = "25vw" maxWidth = "294px" fontSize={{ base: "clamp(1.2vw, 1.2vw,18px)",lg: "18px" }}>Lorem ipsum dolor sit ametctetur adipiscing tempor incididunt ut labore et dolore magna.</Text>
                            </Box>
               
                            {/* This will be the transparency seal */}

                            <Image src = {logo} align = "left"  ratio= {85/81} width = "6vw"
                                maxWidth = "85px" maxHeight = "81px"
                                marginLeft = {{base:"clamp(2vw,2vw,52px)", lg: "52px"}} marginTop = {{base: "(15vh, 15vh, 90px)", lg: "90px"}}>
                            </Image>

                        </VStack>
                    
                    
                        <Box align = "right" paddingRight = {{base:"clamp(3vw,3vw,52px)", lg: "52px"}} paddingLeft ={{base:"clamp(1vw,1vw,30px)", lg: "30px"}} >
                            <Newsletter></Newsletter>
                        </Box>
                    
                    </HStack>
                </Box>

            </Flex>
            
        </Box>

    );
}
