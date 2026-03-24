import Navbar from "../components/globals/Navbar.jsx";
import Slogan from "../components/home/layout/Slogan";
import ChallengeSolution from "../components/home/layout/ChallengeSolution";
import Programs from "../components/home/layout/Programs";
import Sponsors from "../components/home/layout/Sponsors";
import BelowPrograms from "../components/home/layout/BelowPrograms";
import GetInvolved from "../components/home/layout/GetInvolved"
import Footer from "../components/globals/Footer"
import { Box } from "@chakra-ui/react"

export default function Home() {
    return (
        <Box overflowX="hidden" pos="relative" width="100%" maxW="100vw"> 
            <Navbar/>
            <Slogan/>
            <ChallengeSolution/>
            <Programs/>
            <Sponsors />
            <BelowPrograms/>
            <GetInvolved/>
            <Footer/>
        </Box>
    );
}
