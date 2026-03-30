import Navbar from "../components/shell/Navbar";
import WhoWeAre from "../components/about/layout/WhoWeAre";
import MissionAndVision from "../components/about/layout/MissionAndVision";
import OurPeople from "../components/about/layout/OurPeople";
import OurValues from "../components/about/layout/OurValues";
import Footer from "../components/shell/Footer"

const RightSemi = "/pageOverlays/RIghtSemi.png";
const LeftTriangle = "/pageOverlays/LeftTriangle.png";
const RightFadedSemi = "/pageOverlays/RIghtFadedSemi.png";

import { Box, Container, Image } from "@chakra-ui/react";

export default function AboutUs() {
    return (
        <Box width="100%" overflowX="hidden" position="relative" display = "block">
          
          <Box position="relative" width="100%" maxW="2500px" mx="auto">
          <Box
                position="absolute"
                right="-5px"
                top="12%"
                zIndex="2"
                pointerEvents="none"
                width={{ base: "50px", md: "95px" }}
                height={{ base: "100px", md: "262px" }}
                >

                <Image src={RightFadedSemi} objectFit="contain" />
            </Box>
        
            <Box
                position="absolute"
                left="-20px"
                top="21%"
                zIndex="2"
                pointerEvents="none"
                width={{ base: "50px", md: "90px" }}
                height={{ base: "60px", md: "156px" }}
                >

                <Image src={LeftTriangle} objectFit="contain" />
            </Box>
        
            <Box
                position="absolute"
                right="-52px"
                top="52%"
                zIndex="2"
                pointerEvents="none"
                width={{ base: "150px", md: "190px" }}
                height={{ base: "150px", md: "298px" }}
                >

                <Image src={RightSemi} objectFit="contain" />
            </Box>
        
                <Navbar />
                <WhoWeAre />
                <MissionAndVision />
                <OurPeople />
                <OurValues />
                <Footer />
        </Box>
        </Box>
    );
}