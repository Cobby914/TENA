import Navbar from "../components/shell/Navbar";
import WhoWeAre from "../components/about/layout/WhoWeAre";
import MissionAndVision from "../components/about/layout/MissionAndVision";
import OurPeople from "../components/about/layout/OurPeople";
import OurValues from "../components/about/layout/OurValues";
import Footer from "../components/shell/Footer"
import { Box } from "@chakra-ui/react";
import SimpleCircle from "../components/ui/SimpleCircle";
import MultiRingCircle from "../components/ui/MultiRingCircle";

export default function AboutUs() {
    return (
        <Box width="100%" overflowX="hidden" position="relative" display = "block">
          <Box position="relative" width="100%" maxW="2500px" mx="auto">
                <Box
                    position="absolute"
                    left="-60px"
                    top="33%"
                    zIndex="2"
                    pointerEvents="none"
                    width={{ base: "50px", md: "90px" }}
                    height={{ base: "60px", md: "156px" }}
                    >
                    <SimpleCircle
                        size={{ base: "80px", md: "130px" }}
                        strokeWidth={{ base: "8px", md: "12px" }}
                        strokeColor="#5CDAC5"
                        opacity={0.25}
                    />
                </Box>
            
                <Box
                    position="absolute"
                    right="-52px"
                    top="53.6%"
                    zIndex="2"
                    pointerEvents="none"
                    width={{ base: "150px", md: "190px" }}
                    height={{ base: "150px", md: "298px" }}
                    >
                    <MultiRingCircle width={300} height={300} />
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