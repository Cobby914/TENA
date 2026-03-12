import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import {useEffect} from "react";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ReusableProgram from "./pages/ReusableProgram";
import GetInvolved from "./pages/GetInvolved";
import Programs from "./pages/Programs";
import Board from "./pages/Board"
import Team from "./pages/Team"
import Admin from "./pages/Admin";
import Partners from "./pages/Partners";
import Approvals from "./pages/Approvals";
import Login from "./pages/Login";
import ProtectedRoute from "./auth/ProtectedRoute";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


export default function App() {
    return (
        <BrowserRouter>
        <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/reusable-program" element={<ReusableProgram />} />
                <Route path="/getInvolved" element={<GetInvolved />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/board" element={<Board />} />
                <Route path="/team" element={<Team />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
                <Route path="/partners" element={<Partners/>}/>
                <Route path="/approvals" element={<ProtectedRoute><Approvals/></ProtectedRoute>}/>
            </Routes>
        </BrowserRouter>
    );
}