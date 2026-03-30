import Navbar from "../components/shell/Navbar";
import GetInvolvedHeader from "../components/getInvolved/GetInvolvedHeader.jsx"; 
import DPVCards from "../components/getInvolved/DPVCards";
import Footer from "../components/shell/Footer"

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