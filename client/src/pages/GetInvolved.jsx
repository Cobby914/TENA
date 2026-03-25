import Navbar from "../components/globals/Navbar";
import GetInvolvedHeader from "../components/getInvolved/GetInvolvedHeader.jsx"; 
import DPVCards from "../components/getInvolved/DPVCards";
import Footer from "../components/globals/Footer"

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