import { Navigate } from "react-router-dom";
import Navbar from "../components/shell/Navbar";
import ProgramPage from "../components/allPrograms/program/ProgramPage";
import Footer from "../components/shell/Footer";
import { useProgramData } from "../hooks/useProgramsData";

export default function ReusableProgram() {
  const { programs, isLoading } = useProgramData();

  if (!isLoading && programs.length === 0) {
    return <Navigate to="/programs" replace />;
  }

  const id = programs[0]?.id;

  return (
    <>
      <Navbar />
      <ProgramPage id={id} />
      <Footer />
    </>
  );
}
