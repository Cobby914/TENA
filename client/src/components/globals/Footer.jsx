import { Box, Flex, Stack, HStack, Image, VStack, Text, Link, Icon } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";
import logo from "../../assets/logoplaceholder.png";
import Newsletter from "./Newsletter";
import main_logo from "../../assets/transparent_tena_logo.png";
import text_logo from "../../assets/tena_text_logo.png";
import gold_transparency from "../../assets/gold_transparency_candid.png";


// Still need to add the transparency seal
// Future functionality: update text to required

export default function Footer({
 children, ...props}
) {
    return (
        <Box as="section"
             bg="#FFFFFF"
             width="100%"
             minH="100%"
            >
        
            <Flex direction="column"
                justifyContent="center" 
                alignItems = "center"
                >

                <Box background="rgba(248, 249, 251)" width="100%" ratio={1537/613}  py={{ base: 10, md: 12 }} px={{ base: 6, md: 8, lg: 10 }}>
                {/* For heights and widths smaller than the max, just use the same as a ratio of our maxes */}
        
                    <Stack direction={{base: "column", lg: "row"}} width="100%" h="100%" gap={{ base: 12, lg: 10 }} alignItems="flex-start">    
                        <VStack align="flex-start" width={{base: "100%", lg:"65%"}} gap={6}>

                            {/* Logos go here */}
                            <HStack gap={0}>
                                <Image src = {main_logo} align = "left"  ratio= {85/81} width={{ base: "60px", lg: "85px" }}
                                maxWidth = "85px"/>
                            
                                {/* This will be the logo text in future, so ratio/size will still be TBD */}
                                <Image src = {text_logo} align = "right" ratio={153/51} width={{base: "150px", lg: "200px"}}
                                maxWidth = "200px" />
                            </HStack>

                            {/* Separator Line */}

                            <Box width="100%"  height={{base: "2px", lg: "4px"}} background = "rgba(92, 218, 197, 1)" />

                            <HStack gap={{ base: "10px", md: "65px" }} alignItems="flex-start" width="100%">
                                <VStack  minW="200px" gap={10} alignItems="flex-start" >
                                    <Box>
                                        <Text fontSize={{ base: 12, md: 14, lg: 16}} fontWeight={500} lineHeight="tall">1001 E Rosecrans Ave</Text>
                                        <Text fontSize={{ base: 12, md: 14, lg: 16}} fontWeight={500} lineHeight="tall">Los Angeles, CA 90059</Text>
                                        <Text fontSize={{ base: 12, md: 14, lg: 16}} fontWeight={500} lineHeight="tall">United States</Text>
                                    </Box>
                                    <HStack gap={4}>
                                        <Link href="https://www.linkedin.com/company/tena-cares/" isExternal>
                                            <Icon as={FaLinkedin} boxSize={7} />
                                        </Link>
                                        <Link href="https://www.instagram.com/tenacares/" isExternal>
                                            <Icon as={FaInstagram} boxSize={7} />
                                        </Link>
                                    </HStack>
                                </VStack>
                                <VStack minW="150px" gap={6} alignItems="flex-start">
                                    <NavLink to="/about">
                                        <Text fontSize={{ base: 20, md: 22, lg: 24}} fontWeight={700} _hover={{ color: "rgba(92, 218, 197, 1)" }}>About Us</Text>
                                    </NavLink>
                                    <NavLink to="/programs">
                                        <Text fontSize={{ base: 20, md: 22, lg: 24}} fontWeight={700} _hover={{ color: "rgba(92, 218, 197, 1)" }}>Programs</Text>
                                    </NavLink>
                                    <NavLink to="/getInvolved">
                                    <Text fontSize={{ base: 20, md: 22, lg: 24}} fontWeight={700} _hover={{ color: "rgba(92, 218, 197, 1)" }}>Get Involved</Text>
                                    </NavLink>
                                    <NavLink to="/donate">
                                        <Text fontSize={{ base: 20, md: 22, lg: 24}} fontWeight={700} _hover={{ color: "rgba(92, 218, 197, 1)" }}>Donate</Text>
                                    </NavLink>
                                </VStack>

                                <VStack maxW="260px" gap={5} alignItems={"flex-start"}>
                                    <Text fontSize={{ base: 12, md: 14, lg: 16}} fontWeight={500} lineHeight="24px" width="100%">TENA is a 501(c)(3) not-for-profit organization.</Text>
                                    <Text fontSize={{ base: 12, md: 14, lg: 16}} fontWeight={500} lineHeight="24px" width="100%">Our Tax ID: 83-4267004</Text>
                                </VStack>

                            </HStack>

                            <HStack mt={6} align="flex-end" justify="space-between" width="100%">
                                <Image src={gold_transparency} ratio={1} width={"90px"} />
                                <Text fontSize={{ base: 12, md: 14, lg: 16}} fontWeight={500} lineHeight="24px" >© 2026 TENA CARE. All rights reserved</Text>
                            </HStack>
                        </VStack>
                    
                        <Box align="center" w={{base: "100%", lg:"40%"}} mt={{base: 10, lg: 0}} ml={{base: 0, lg: 14}}>
                            <Newsletter></Newsletter>
                        </Box>
                    
                    </Stack>
                </Box>

            </Flex>
            
        </Box>

    );
}
