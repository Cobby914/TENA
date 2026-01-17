import Navbar from "../components/home/layout/Navbar";
import Slogan from "../components/home/layout/Slogan";
import ProblemStatement from "../components/home/layout/ProblemStatement";
import Programs from "../components/home/layout/Programs";

export default function Home() {
    return (
        <>
            <Navbar/>
            <Slogan/>
            <ProblemStatement/>
            <Programs/>
        </>
    );
}