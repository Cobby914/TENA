import Navbar from "../components/home/layout/Navbar";
import Slogan from "../components/home/layout/Slogan";
import ChallengeSolution from "../components/home/layout/ChallengeSolution";
import Programs from "../components/home/layout/Programs";
import BelowPrograms from "../components/home/layout/BelowPrograms";
import GetInvolved from "../components/home/layout/GetInvolved"
import Footer from "../components/home/layout/Footer"


export default function Home() {
    return (
        <>
            <Navbar/>
            <Slogan/>
            <ChallengeSolution/>
            <Programs/>
            <BelowPrograms/>
            <GetInvolved/>
            <Footer/>
        </>
    );
}
