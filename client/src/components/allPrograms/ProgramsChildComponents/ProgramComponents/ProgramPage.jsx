import ProgramHeader from "./ProgramHeader";
import ProgramProblemSolution from "./ProgramProblemSolution";
import ProgramProgress from "./ProgramProgress";

export default function ProgramPage({ id, title, introCopy }) {
  return (
    <>
      <ProgramHeader title={title} />
      <ProgramProblemSolution id={id} introCopy={introCopy} />
      <ProgramProgress />
    </>
  );
}