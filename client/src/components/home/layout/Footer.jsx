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
                maxWidth = "1440px" maxHeight= "661px" >
                {/* For heights and widths smaller than the max, just use the same as a ratio of our maxes */}
        
                    <HStack width = "100vw">
                        <VStack align = "left" maxWidth = "993px" width = "65vw" maxHeight = "661px" height = "100vh">

                            {/* Logos go here */}
                            <HStack width = "30vw" height = "15vh"  marginTop = "1vh"
                                maxWidth= "300px" maxHeight =  "100px">

                                <Image src = {logo} align = "left"  ratio= {85/81} width = "6vw"
                                maxWidth = "85px" maxHeight = "81px"
                                marginLeft="2vw">
                                </Image>
                                
                                {/* This will be the logo text in future, so ratio/size will still be TBD */}
                                <Image src = {logo} align = "right" width = "10vw" height = "7vh"
                                ratio = {151/55} marginLeft = "2vw"
                                maxWidth = "151px" maxHeight = "55px">
                                </Image>
                            </HStack>

                            {/* Separator Line */}

                            <Box width = "60vw"  height = "0.3vh" background = "#7f7f7f" marginLeft="2vw" marginTop = "0.5vh"></Box>

                            <HStack marginTop = "0.3vh" gap = "0px" maxWidth = "993px">
                                <Box marginLeft="2vw">
                                    <Text fontSize= "1.6vw" fontWeight={400} lineHeight="100%">Tena Foundation</Text>
                                    <Text fontSize= "1.6vw" fontWeight={400} lineHeight="100%">Address Line</Text>
                                    <Text fontSize= "1.6vw" fontWeight={400} lineHeight="100%">State</Text>
                                    <Text fontSize= "1.6vw" fontWeight={400} lineHeight="100%">United States</Text>
                                </Box>

                                <Box marginLeft = "12%">
                                    <Text fontSize="2vw" fontWeight={700} lineHeight="100%">Link 1</Text>
                                    <Text fontSize="2vw" fontWeight={700} lineHeight="150%">Link 2</Text>
                                </Box>

                                <Box marginLeft = "8%" marginTop="2%">
                                    <Text fontSize="2vw" fontWeight={700} lineHeight="100%">Link 3</Text>
                                    <Text fontSize="2vw" fontWeight={700} lineHeight="150%">Link 4</Text>
                                </Box>

                                <Box marginLeft = "6vw" marginTop = "2vh">
                                    <Text fontSize="1.6vw" fontWeight={400} lineHeight="100%">Contact Information</Text>
                                    <Text fontSize="1.6vw" fontWeight={400} lineHeight="100%">Contact Information</Text>
                                    <Text fontSize="1.6vw" fontWeight={400} lineHeight="100%">Contact Information</Text>
                                    <Text fontSize="1.6vw" fontWeight={400} lineHeight="100%">Contact Information</Text>
                                    
                                    <HStack gap = "0px" align = "center"marginTop = "4%">
                                        {/* Using Logo as placeholder */}
                                        <Image src = {logo} align = "left" maxHeight = "27px" maxWidth = "27px" marginLeft = "20%" width = "2vw"></Image>
                                        <Image src = {logo} maxHeight = "27px" maxWidth = "27px"  marginLeft = "3%" marginRight = "3%" width = "2vw"></Image>
                                        <Image src = {logo} maxHeight = "27px" maxWidth = "27px" width = "2vw"></Image>
                                    </HStack>
                                </Box>

                            </HStack>

                            <Box>
                                <Text marginLeft="2vw" marginTop = "2%" fontSize = "1.2vw">Additional information</Text>
                                <Text marginLeft="2vw" width = "25vw"  fontSize = "1.2vw">Lorem ipsum dolor sit ametctetur adipiscing tempor incididunt ut labore et dolore magna.</Text>
                            </Box>
               
                            {/* This will be the transparency seal */}

                            <Image src = {logo} align = "left"  ratio= {85/81} width = "6vw"
                                maxWidth = "85px" maxHeight = "81px"
                                marginLeft="2vw" marginTop = "15vh">
                            </Image>

                        </VStack>
                    
                    
                        <Box align = "right" paddingRight = "2vw">
                            <Newsletter></Newsletter>
                        </Box>
                    
                    </HStack>
                </Box>

            </Flex>
            
        </Box>

    );
}
