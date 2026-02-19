import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ReusableProgram from "./pages/ReusableProgram";
import GetInvolved from "./pages/GetInvolved";
import Programs from "./pages/Programs";
import Partners from "./pages/Partners";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/reusable-program" element={<ReusableProgram />} />
                <Route path="/getInvolved" element={<GetInvolved />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/partners" element={<Partners/>}/>
            </Routes>
        </BrowserRouter>
    );
}