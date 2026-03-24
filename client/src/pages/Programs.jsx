import Navbar from "../components/globals/Navbar";
import OurPrograms from "../components/allPrograms/OurPrograms";
import CareAndFair from "../components/allPrograms/CareAndFair";
import Footer from "../components/globals/Footer"

export default function Programs() {
    return (
        <>
            <Navbar />
            <OurPrograms />
            <CareAndFair />
            <Footer/>
        </>
    );
}