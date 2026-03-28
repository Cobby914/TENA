import Navbar from "../components/globals/Navbar";
import WhoWeAre from "../components/about/layout/WhoWeAre";
import MissionAndVision from "../components/about/layout/MissionAndVision";
import OurPeople from "../components/about/layout/OurPeople";
import OurValues from "../components/about/layout/OurValues";
import Footer from "../components/globals/Footer"

import RightSemi from "../assets/pageOverlays/RightSemi.png"
import LeftTriangle from "../assets/pageOverlays/LeftTriangle.png"
import RightFadedSemi from "../assets/pageOverlays/RightFadedSemi.png"

import { Box, Container, Image } from "@chakra-ui/react";

export default function AboutUs() {
    return (
        <Box position="relative" width="100%" maxW="100vw" display="block" overflowX="hidden">
          
          
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
            <Container maxW="container.xl" position="relative">
                <WhoWeAre />
                <MissionAndVision />
                <OurPeople />
                <OurValues />
            </Container>
            <Footer />
        
        </Box>
    );
}