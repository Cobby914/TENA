import { Navigate, useParams } from "react-router-dom";
import ProgramPage from "../components/allPrograms/program/ProgramPage";
import { useProgramData } from "../hooks/useProgramsData";
import { createProgramSlug } from "../lib/programSlug";

export default function ProgramBySlug() {
  const { programSlug } = useParams();
  const { programs, isLoading } = useProgramData();

  const program = programs.find(
    (entry) => createProgramSlug(entry?.title) === String(programSlug ?? "").trim()
  );

  if (!isLoading && !program) {
    return <Navigate to="/programs" replace />;
  }

  return <ProgramPage id={program?.id} />;
}
