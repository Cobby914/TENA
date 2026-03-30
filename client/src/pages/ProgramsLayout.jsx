import { Outlet } from "react-router-dom";
import Navbar from "../components/shell/Navbar";
import Footer from "../components/shell/Footer";

export default function ProgramsLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
