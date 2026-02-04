import Navbar from "../components/home/layout/Navbar";
import GetInvolvedHeader from "../components/getInvolved/GetInvolvedHeader.jsx"; 
import DPVCards from "../components/getInvolved/DPVCards";
import Footer from "../components/home/layout/Footer"

export default function GetInvolved() {
    return (
        <>
            <Navbar />
            <GetInvolvedHeader />
            <DPVCards />
            <Footer/>
        </>
    );
} 