import Navbar from "../components/globals/Navbar";
import WhoWeAre from "../components/about/layout/WhoWeAre";
import MissionAndVision from "../components/about/layout/MissionAndVision";
import OurPeople from "../components/about/layout/OurPeople";
import OurValues from "../components/about/layout/OurValues";
import Footer from "../components/globals/Footer"

export default function AboutUs() {
    return (
        <>
            <Navbar/>
            <WhoWeAre/>
            <MissionAndVision/>
            <OurPeople/>
            <OurValues/>
            <Footer/>
        </>
    );
}