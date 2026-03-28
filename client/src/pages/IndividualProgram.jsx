import Navbar from "../components/globals/Navbar";
import Header from "../components/individualprogram/Header";
import Context from "../components/individualprogram/Context";
import Statistics from "../components/individualprogram/Statistics";

export default function IndividualProgram() {
    return (
        <>
            <Navbar/>
            <Context/>
            <Statistics/>
        </>
    );
}