import CareNavigationHeader from "../components/allPrograms/ProgramsChildComponents/CareNavigationComponents/CareNavigationHeader";
import CareNaviProblemSolution from "../components/allPrograms/ProgramsChildComponents/CareNavigationComponents/CareNaviProblemSolution";
import CareNavigationProgress from "../components/allPrograms/ProgramsChildComponents/CareNavigationComponents/CareNavigationProgress";

export default function CareNavigation() {
  return (
    <>
      <CareNavigationHeader />
      <CareNaviProblemSolution />
      <CareNavigationProgress />
    </>
  );
}
