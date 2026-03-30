import { Box, Button, Flex, HStack, Text, VStack, Card, Image } from "@chakra-ui/react";

const Partners = "/GetInvolved/GetInvolvedPartnerships.jpg";
const PTop = "/GetInvolved/vectors/PartnershipTop.svg";
const PBottom = "/GetInvolved/vectors/PartnershipBottom.svg";
import GIC from "./GetInvolvedCard"

export default function GetInvolvedCard ({

}) {
    return (
    <Box width="100%" overflowX="hidden" position="relative" display = "block">
          
          <Box position="relative" width="100%" maxW="2500px" mx="auto">

        <Box
                position="absolute"
                right="10%"
                top="0%"
                zIndex="2"
                pointerEvents="none"
                width={{ base: "100px", md: "196px" }}
                height={{ base: "50px", md: "100px" }}
                >

                <Image src={PTop} objectFit="contain" />
            </Box>

        <Box
                position="absolute"

                bottom= "0%"
                left = "30%"
                zIndex="1"
                pointerEvents="none"
                width={{ base: "100px", md: "196px" }}
                height={{ base: "70px", md: "120px" }}
                
                >

                <Image src={PBottom} objectFit="contain"  width={{ base: "100px", md: "196px" }}
                height={{ base: "70px", md: "120px" }}/>
            </Box>
        


        <GIC title = "Partnership" description = "We collaborate with healthcare organizations, nonprofits, schools, and funders to expand access to care, strengthen prevention, and build workforce pathways rooted in community trust." buttonName = "Learn More" image_here = {Partners} destination = {"/partners"}></GIC>


        
    </Box>
    </Box>

    );
}