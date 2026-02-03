import { Box, Flex, HStack, Image, VStack, Text } from "@chakra-ui/react";

import logo from "../../../assets/logoplaceholder.png";
import NewsLetter from "../ui/Newsletter";

// Still need to add the transparency seal
// Future functionality: update text to required

export default function Footer({}

) {
    return (
        <Box width = "1440px" height = "611px" background = "#B8b8b8">

            <HStack>
                <VStack align = "left">

                {/* Logos go here */}
                <HStack width = "939px" height = "100px"  marginTop = "10px">
                    <Image src = {logo} align = "left" height = "81px" width = "85px" marginLeft="52px">

                    </Image>
                    <Image src = {logo} align = "right" width = "151px" height = "55px" marginLeft = "16px">

                    </Image>
                </HStack>

                {/* Separator Line */}

                <Box width = "815px" height = "2px" background = "#7f7f7f" marginLeft="52px" marginTop = "15px"></Box>

                <HStack marginTop = "18px">
                    <Box marginLeft="52px">
                        <Text fontSize={20} fontWeight={400} lineHeight="100%">Tena Foundation</Text>
                        <Text fontSize={20} fontWeight={400} lineHeight="100%">Address Line</Text>
                        <Text fontSize={20} fontWeight={400} lineHeight="100%">State</Text>
                        <Text fontSize={20} fontWeight={400} lineHeight="100%">United States</Text>
                    </Box>
                    <Box marginLeft = "150px">
                        <Text fontSize={24} fontWeight={700} lineHeight="100%">Link 1</Text>
                        <Text fontSize={24} fontWeight={700} lineHeight="150%">Link 2</Text>
                        
                    </Box>
                    <Box marginLeft = "20" marginTop="4px">
                        <Text fontSize={24} fontWeight={700} lineHeight="100%">Link 3</Text>
                        <Text fontSize={24} fontWeight={700} lineHeight="150%">Link 4</Text>
                    </Box>

                     <Box marginLeft = "104px">
                        <Text fontSize={20} fontWeight={400} lineHeight="100%">Contact Information</Text>
                        <Text fontSize={20} fontWeight={400} lineHeight="100%">Contact Information</Text>
                        <Text fontSize={20} fontWeight={400} lineHeight="100%">Contact Information</Text>
                        <Text fontSize={20} fontWeight={400} lineHeight="100%">Contact Information</Text>
                        <HStack>
                            {/* Using Logo as placeholder */}
                            <Image src = {logo} align = "left" height = "27px" width = "27px" marginTop = "15px" marginLeft = "34px"></Image>
                            <Image src = {logo} height = "27px" width = "27px" marginTop = "15px" marginLeft = "5px" marginRight = "5px"></Image>
                            <Image src = {logo} height = "27px" width = "27px" marginTop = "15px"></Image>
                        </HStack>

                     </Box>

                </HStack>

                <Box>
                    <Text marginLeft="52px" marginTop = "20px" fontSize = {18}>Additional information</Text>
                    <Text width = "294px" marginLeft = "52px" fontSize = {18}>Lorem ipsum dolor sit ametctetur adipiscing tempor incididunt ut labore et dolore magna.</Text>
                </Box>
               


                {/* This will be the transparency seal */}
                
                <Image src = {logo} width = "85px" height = "81px" marginLeft = "52px" marginTop = "90px" >

                </Image>


               
                </VStack>


                <NewsLetter align = "right" marginTop= "39px"></NewsLetter>

            </HStack>
            
            </Box>
    );
}