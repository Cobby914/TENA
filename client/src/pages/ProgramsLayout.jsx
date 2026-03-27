import { Outlet } from "react-router-dom";
import Navbar from "../components/globals/Navbar";
import Footer from "../components/globals/Footer";

export default function ProgramsLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
