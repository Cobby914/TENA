import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ReusableProgram from "./pages/ReusableProgram";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/reusable-program" element={<ReusableProgram />} />
            </Routes>
        </BrowserRouter>
    );
}