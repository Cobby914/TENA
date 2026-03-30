import { Box, Button, Flex, HStack, Text, VStack, Card, Image } from "@chakra-ui/react";

const Donos = "/GetInvolved/GetInvolvedDonations.png";
const DRight = "/GetInvolved/vectors/DonationsRight.svg";
const DLeft = "/GetInvolved/vectors/DonationsLeft.svg";
import GIC from "./GetInvolvedCard"

export default function GetInvolvedCard ({

}) {
    return (
    <Box width="100%" overflowX="hidden" position="relative" display = "block">
          
          <Box position="relative" width="100%" maxW="2500px" mx="auto">

        <Box
                position="absolute"
                right="-5px"
                top="35%"
                zIndex="2"
                pointerEvents="none"
                width={{ base: "50px", md: "95px" }}
                height={{ base: "100px", md: "209px" }}
                >

                <Image src={DRight} objectFit="contain" />
            </Box>

        <Box
                position="absolute"

                bottom= "0.3%"
                zIndex="2"
                pointerEvents="none"
                width={{ base: "50px", md: "90px" }}
                height={{ base: "70px", md: "120px" }}
                
                >

                <Image src={DLeft} objectFit="contain" width={{ base: "50px", md: "90px" }}
                height={{ base: "70px", md: "120px" }}/>
            </Box>
        


        <GIC title = "Donations" description = "Donations fund free health fairs, personalized care navigation, and training for future healthcare leaders. Every dollar helps remove barriers and bring care closer to home." buttonName = "Donate Now" image_here = {Donos}></GIC>


        
    </Box>
    </Box>

    );
}