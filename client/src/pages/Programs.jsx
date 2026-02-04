import Navbar from "../components/home/layout/Navbar";
import OurPrograms from "../components/allPrograms/OurPrograms";
import CareAndFair from "../components/allPrograms/CareAndFair";
import Footer from "../components/home/layout/Footer"

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