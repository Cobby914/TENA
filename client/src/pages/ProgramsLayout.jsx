import { Outlet } from "react-router-dom";
import Navbar from "../components/home/layout/Navbar";
import Footer from "../components/home/layout/Footer";

export default function ProgramsLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
