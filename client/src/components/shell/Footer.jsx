import { Box, Flex, Stack, HStack, Image, VStack, Text, Link, Icon } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";
import Newsletter from "./Newsletter";

const main_logo = "/transparent_tena_logo.png";
const text_logo = "/tena_text_logo.png";
const gold_transparency = "/Footer/gold_transparency_candid.png";


// Still need to add the transparency seal
// Future functionality: update text to required

export default function Footer({
 children, ...props}
) {
    return (
        <Box width="100%" overflow="hidden" position="relative">
            <Box as="footer" width="100vw" background="rgba(248, 249, 251)" border="1px solid rgba(0, 0, 0, 0.17)" py={{ base: 1, md: 2 }} px={{ base: 0, md: 14 }}>
                <Flex direction={{ base: "column", lg: "row" }} justify={"center"} align={"center"} gap={20}>
                    <VStack width={{base:"500px",  lg: "900px"}} minH="600px" py={16}>
            
                            <VStack align="flex-start" width="100%" gap={4}>
                                {/* Logos go here */}
                                <HStack gap={0} align="center" justify="center">
                                    <Image src = {main_logo} align = "left" ratio= {85/81} width="85px" />
                                    {/* This will be the logo text in future, so ratio/size will still be TBD */}
                                    <Image src = {text_logo} align = "right" ratio={153/51} width="180px" ml={-4}/>
                                </HStack>

                                {/* Separator Line */}
                                <Box width={{base:"300px",  lg: "800px"}}  height="2px" background = "rgba(92, 218, 197, 1)" my={2} />

                                <Flex direction={{base: "column", lg: "row"}} pt={6} alignItems="flex-start" width="890px" justify="space-between" gap={{base: 20, lg:0}}> 
                                    <VStack  minW="200px" gap={8} alignItems="flex-start" >
                                        <Text fontSize={{ base: 12, md: 14, lg: 15}} fontWeight={500} lineHeight="20px" letterSpacing={0}>
                                            1001 E Rosecrans Ave<br/>Los Angeles, CA 90059<br/>United States
                                        </Text>
                                        
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
                                            <Text fontSize={{ base: 20, md: 22}} fontWeight={700} _hover={{ color: "rgba(92, 218, 197, 1)" }}>About Us</Text>
                                        </NavLink>
                                        <NavLink to="/programs">
                                            <Text fontSize={{ base: 20, md: 22}} fontWeight={700} _hover={{ color: "rgba(92, 218, 197, 1)" }}>Programs</Text>
                                        </NavLink>
                                        <NavLink to="/getInvolved">
                                        <Text fontSize={{ base: 20, md: 22}} fontWeight={700} _hover={{ color: "rgba(92, 218, 197, 1)" }}>Get Involved</Text>
                                        </NavLink>
                                        <NavLink to="/donate">
                                            <Text fontSize={{ base: 20, md: 22}} fontWeight={700} _hover={{ color: "rgba(92, 218, 197, 1)" }}>Donate</Text>
                                        </NavLink>
                                    </VStack>

                                    <VStack maxW="260px" gap={5} alignItems={"flex-start"}>
                                        <Text fontSize={{ base: 12, md: 14, lg: 15}} fontWeight={500} lineHeight="20px" width="100%">
                                            TENA is a 501(c)(3) not-for-profit organization.<br/><br/>Our Tax ID: 83-4267004
                                        </Text>
                                    </VStack>

                                </Flex>

                                <HStack mt={6} align="flex-end" justify="space-between" width="100%">
                                    <Image src={gold_transparency} ratio={1} width={"90px"} />
                                    <Box px={40}>
                                        <Text fontSize={{ base: 12, md: 14, lg: 15}} fontWeight={500} lineHeight="24px" ml={-10}>© 2026 TENA CARE. All rights reserved</Text>
                                    </Box>
                                </HStack>
                            </VStack>
                    </VStack>

                    <Box align="center" w="450px" h="500px" >
                        <Newsletter></Newsletter>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}
