import { Box, Button, Flex, HStack, Text, VStack, Image, Icon} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import {ChevronRight} from "lucide-react"

export default function GetInvolvedCard ({
    title,
    description,
    buttonName,
    image_here,
    destination
}) {
    return (
        <Box
            bg="#FFFFFF"
            width="100%"
            maxW="1283px"
            mx="auto"
            height="auto"

            px={{ base: 6, md: 10, lg: 14 }}
            py={{ base: 8, md: 10, lg: 12 }}
            borderWidth = "2px"
            borderColor = "#dedede"
            zIndex = "1"
            
        >
            <Flex direction= {{base: "column", md : "row"}} gap={{ base: 6, md: 10, lg: 14 }} alignItems={{ base: "center", lg: "flex-start" }} zIndex = "3">
                <Image  
                    width="100%"
                    maxW = "384px"
                    height={{ base: "auto", lg: "384px" }}
                    maxH={{ base: "300px", md: "450px", lg: "384px" }}
                    src={image_here}
                    flexShrink={0}
                    objectFit={{ base: "contain", lg: "cover" }}
                    zIndex = "1"
                    >  
                </Image>
            
                
                <VStack alignItems="flex-start" spacing={{ base: 3, md: 4 }} width="100%" ml = {{base: "30px",md : "50px"}}>
                    <Text fontFamily = "INTER" fontWeight = "700" fontStyle = "normal" fontSize = {{base: "18px", md : "36px"}} lineHeight= "120%">
                        {title}
                    </Text>
                    <Text fontFamily = "INTER" fontWeight = "400" fontStyle = "normal" fontSize = {{base: "12px", md : "24px"}} lineHeight= "150%"
                        maxW = "539px">
                        {description}
                    </Text>
                    
                        <Flex width="100%" justifyContent={{ base: "center", lg: "flex-end" }} pt={{ base: 6, md: 8, lg: 10 }}>
                            <Button
                                
                                as={NavLink}
                                to={destination}
                                bg="#FFFFFF"
                                variant="outline"
                                borderRadius="2px"
                                width = {{base: "140px", md: "179px"}}
                                height={{ base: "38px", md: "48px" }}
                                px={{ base: 8, md: 10 }}
                                rightIcon={<Icon as={ChevronRight} boxSize={{ base: "12px", lg: "18px"}}/>}
                                _hover = {{bg: "#3f5f85"}}
                            >
                                {buttonName}
                            </Button>
                        </Flex>
                    
                </VStack>
            </Flex>
        </Box>
    );
}