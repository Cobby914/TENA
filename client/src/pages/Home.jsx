import Navbar from "../components/home/layout/Navbar";
import Slogan from "../components/home/layout/Slogan";
import ProblemStatement from "../components/home/layout/ProblemStatement";
import Programs from "../components/home/layout/Programs";
import BelowPrograms from "../components/home/layout/BelowPrograms";
import GetInvolved from "../components/home/layout/GetInvolved"
import Footer from "../components/home/layout/Footer"


export default function Home() {
    return (
        <>
            <Navbar/>
            <Slogan/>
            <ProblemStatement/>
            <Programs/>
            <BelowPrograms/>
            <GetInvolved/>
            <Footer/>
        </>
    );
}
