import ProgramHeader from "./ProgramHeader";
import ProgramProblemSolution from "./ProgramProblemSolution";
import ProgramProgress from "./ProgramProgress";

export default function ProgramPage({ id, title, introCopy, backgroundPosition }) {
  return (
    <>
      <ProgramHeader id={id} title={title} backgroundPosition={backgroundPosition} />
      <ProgramProblemSolution id={id} introCopy={introCopy} />
      <ProgramProgress />
    </>
  );
}