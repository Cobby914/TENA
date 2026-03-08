import {SimpleGrid, VStack, HStack, Text, List, ListItem, Box, Button} from "@chakra-ui/react"
import { NavLink } from "react-router-dom";
import { Dot, ChevronRight } from "lucide-react";

export default function ChallengeSolution () {
    return (
        <Box p={{base: 10, md: 20}} maxW="100%" alignContent={"center"}>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, md: 20 }}>
                {/* Problem */}
                <VStack align="start" spacing={5}>
                    <Text fontWeight={400} fontSize={24} lineHeight="150%">
                        WHY WE EXIST
                    </Text>
                    <Text fontWeight={700} fontSize={36} lineHeight="120%">
                        The Challenge
                    </Text>
                    <Text mt={3} fontWeight={400} fontSize={{ base: "md", md: "lg", lg: "xl" }} lineHeight="150%">
                        Across Los Angeles County, structural inequities rooted in economic  disparity, housing instability, racial segregation, and uneven access to care continue to shape who gets healthy and who gets left behind. <br/><br/>
                        Over 1 million LA County residents remain uninsured  or underinsured. Black and Latinx adults face disproportionate  inequities in health outcomes, insurance coverage, housing security, and economic stability — outcomes shaped by decades of systemic injustice. <br/><br/>
                        Despite being one of the wealthiest counties  in the nation, an estimated 25% of households still struggle with food  insecurity, a powerful social determinant of chronic illness.
                    </Text>
                </VStack>

                {/* Solution */}
                <VStack align="start" spacing={5}>
                    <Text  fontWeight={400} fontSize={24} lineHeight="150%">
                        OUR APPROACH
                    </Text>
                    <Text  mt={-2} fontWeight={700} fontSize={36} lineHeight="120%">
                        TENA's Solution
                    </Text>
                    <Text mt={5}  fontWeight={400} fontSize={{ base: "md", md: "lg", lg: "xl" }} lineHeight="150%">
                        At the heart of TENA's mission is the belief that  health equity isn't just access to services — it's access with dignity,  trust, and relationship.
                    </Text>
                    <List fontSize={{ base: "md", md: "lg", lg: "xl" }} mt={3} spacing={8}>
                        <ListItem display="flex" alignItems="flex-start">
                            <Box>
                                <Dot size={40}/>
                            </Box>
                            <Box>
                                Personalized Care Navigation — Connecting residents to insurance, medical homes, preventive care, and social resources that truly work for them
                            </Box>
                        </ListItem>
                        <ListItem display="flex" alignItems="flex-start">
                            <Box>
                                <Dot size={40}/>
                            </Box>
                            <Box>
                                Community Health Access Points — Free health fairs offering screenings, education, referrals, and support in trusted neighborhood spaces
                            </Box>
                        </ListItem>
                        <ListItem display="flex" alignItems="flex-start">
                            <Box>
                                <Dot size={40}/>
                            </Box>
                            <Box>
                                Workforce Readiness & Youth Empowerment — Training the next generation of diverse healthcare leaders rooted in lived experience                            </Box>
                        </ListItem>
                    </List>
                    <NavLink to="/getInvolved" >
                        <Button mt={3} ml={2} height={12} borderRadius={6} px={6} bgColor="rgb(237, 242, 247)">
                            <HStack gap={2}>
                                <Text fontWeight={600} fontSize={18} lineHeight={28} textColor="rgb(26, 32, 44)">Get Involved</Text>
                                <ChevronRight size={20} style={{marginTop: "4px"}}/>
                            </HStack>
                        </Button>
                    </NavLink>
                </VStack>
            </SimpleGrid>
        </Box>
    );
}
