import { Box, Button, Flex, HStack, Text, VStack, Card, Image } from "@chakra-ui/react";

const Volun = "/GetInvolved/GetInvolvedVolunteering.jpg";
const VTop = "/GetInvolved/vectors/VolunteerTop.svg";
const VBottom = "/GetInvolved/vectors/VolunteerBottom.svg";
import GIC from "./GetInvolvedCard"

export default function GetInvolvedCard ({

}) {
    return (
    <Box width="100%" overflowX="hidden" position="relative" display = "block">
          
          <Box position="relative" width="100%" maxW="2500px" mx="auto">

        <Box
                position="absolute"
                left = "30%"
                zIndex="2"
                pointerEvents="none"
                width={{ base: "100px", md: "209px" }}
                height={{ base: "88px", md: "170px" }}
                >

                <Image src={VTop} objectFit="contain" />
            </Box>

        <Box
                position="absolute"
                right = "35%"
                bottom= "0.3%"
                zIndex="2"
                pointerEvents="none"
                height={{ base: "50px", md: "100px" }}
                width={{ base: "100px", md: "196px" }}
                
                >

                <Image src={VBottom} objectFit="contain" height={{ base: "50px", md: "100px" }}
                width={{ base: "100px", md: "196px" }}/>
            </Box>
        


        <GIC title = "Volunteering" description = "Make a real impact in your community. Volunteers support health fairs, care navigation, and outreach efforts across Los Angeles County. Your time helps neighbors access care, build confidence, and feel supported." 
        buttonName = "Learn More" image_here = {Volun} destination={"https://docs.google.com/forms/d/e/1FAIpQLSfHRyVM1116n02eKWHbwKME1WIrRWQbIy2S44Z-8Ap0V57hYA/viewform"}></GIC>


        
    </Box>
    </Box>

    );
}