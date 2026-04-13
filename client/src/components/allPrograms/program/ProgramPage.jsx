import { Box } from "@chakra-ui/react";
import ProgramHeader from "./ProgramHeader";
import ProgramProblemSolution from "./ProgramProblemSolution";
import MeasurableProgress from "./MeasurableProgress";
import ProgramJoinUs from "./ProgramJoinUs";

export default function ProgramPage({ id }) {
  return (
    <Box position="relative" overflow="hidden">
      <Box
        position="absolute"
        left="-167px"
        top="25%"
        width="334px"
        height="334px"
        borderRadius="334px"
        border="40px solid"
        borderColor="brand.accent"
        opacity={0.15}
        zIndex={2}
        pointerEvents="none"
      />

      <ProgramHeader id={id}/>
      <ProgramProblemSolution id={id} />
      <MeasurableProgress id={id} />
      <ProgramJoinUs />
    </Box>
  );
}
