import { Box, Flex, VStack, HStack, Text, SimpleGrid, Image } from "@chakra-ui/react";
import logo from "../../../assets/logoplaceholder.png";
import BIUT from "../../../assets/BIUT.png";
import BOMBAS from "../../../assets/BOMBAS.png";
import ICOH_LOGO from "../../../assets/ICOH_LOGO.png";
import KGI_LOGO from "../../../assets/KGI_LOGO.png";
import MKBU from "../../../assets/MBKU.png";
import PEAR_SUITE from "../../../assets/PEAR_SUITE.png";
import SOUTHLACAFE from "../../../assets/SOUTHLACAFE.png";
import USCMED from "../../../assets/USCMED.png";



export default function OurPartners(){

    return (

        <Box width = "100%" background = "#FFFFF" as = "section">
            <Flex   alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    gap={{ base: 3, md: 4 }}
                    mx="auto">


                <VStack width = "100%" background = "#b8b8b8" height = "min(50vh,406px)" align = "left" maxWidth = "1536px" maxHeight = "380px">
                    <Text fontSize = {{base:"min(2.5vw,36px)"}} ml = "min(6vw,74px)" mt = "min(4vh,66px)">Partners that grow our journey</Text>
                    
                    {/* Change image ratio and max W & H based on the size of the mosaic */}
                    <Image src = {logo} width = "100%" height = "28vh" mt = "2vh" ratio = "100%/28vh" maxHeight = "200px" maxWidth = "1536px"></Image>
                </VStack>
                
                {/* This portion is for all the logos of the partners */}
                <Box width = "100%" maxWidth = "1536px" height = "500px" mt = "3vh">
                    <Text fontSize = "min(2vw,28px)" mt = "min(3vh, 100px)" ml = "min(12vw,173px)" fontStyle = "SF Pro">The Partners</Text>


                    <HStack width = "100%" maxWidth = "1536px" justify = "left" gap = "min(5vw,60px)" ml = "min(12vw,173px)" mt = "min(5vh,80px)">
                            <Image src = {USCMED} maxWidth = "453px" maxHeight = "78px" width = "40vw" height = "11vh"></Image>
                            <Image src = {ICOH_LOGO} maxWidth = "166px" maxHeight = "93px" width = "10vw" height = "13vh"></Image>
                            <Image src = {MKBU} maxWidth = "112px" maxHeight = "104px" width = "8vw" height = "14vh"></Image>
                            <Image src = {BIUT} maxWidth = "103px" maxHeight = "96px" width = "9vw" height = "13vh"></Image>
                    </HStack>
                    <HStack align = "center" width = "100%" maxWidth = "1536px" justify = "left" ml = "min(12vw,173px)" gap = "min(9vw,95px)" mt = "min(3vh,30px)">
                            <Image src = {SOUTHLACAFE} maxWidth = "193px" maxHeight = "100px" width = "12vw" height = "13vh"></Image>
                            <Image src = {PEAR_SUITE} maxWidth = "236px" maxHeight = "79px" width = "20vw" height = "11vh"></Image>
                            <Image src = {KGI_LOGO} maxWidth = "198px" maxHeight = "87px" width = "14vw" height = "12vh"></Image>
                            <Image src = {BOMBAS} maxWidth = "103px" maxHeight = "96px" width = "13vh" height = "13vh"></Image>
                    </HStack>
                      
                   
                    <Box mt = "min(10vh,100px)">
                        <Flex justify="center" 
                            align="flex-start" 
                            wrap="wrap" 
                            gap="4rem"
                            padding="2rem">
                            <VStack align="start" 
                                    flex="1" 
                                    minWidth={{ base: "100%", md: "500px" }}
                                    maxWidth="600px"
                                    gap = "20px">
                                <Text fontSize = "32px">How our Partners Help:</Text>
                                <Text fontSize = "20px" mt = "10px">• Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam</Text>
                                <Text fontSize = "20px">• Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam</Text>
                                <Text fontSize = "20px">• Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam</Text>
                            </VStack>

                            <VStack align="start" 
                                    flex="1" 
                                    minWidth={{ base: "100%", md: "300px" }}
                                    maxWidth="600px"
                                    gap = "30px">
                                <Text fontSize = "32px">Learn More.</Text>

                                <Text fontSize = "20px" mt = "10px">• How to become a partner</Text>
                                <Text fontSize = "20px">• Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                                <Text fontSize = "20px">• Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                                
                            </VStack>

                        </Flex>
                    </Box>


                </Box>
                
            </Flex>
        </Box>

    );
}