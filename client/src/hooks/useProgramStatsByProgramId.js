import { useQuery } from "@tanstack/react-query";
import { fetchProgramStatsByProgramId } from "../api/programsAPI";

export function useProgramStatsByProgramId(programId) {
  const query = useQuery({
    queryKey: ["program_stats", programId],
    queryFn: ({ signal }) => fetchProgramStatsByProgramId(programId, signal),
    enabled: programId != null && programId !== ""
  });

  return {
    stats: query.data ?? [],
    isLoading: query.isPending,
    errorMsg: query.error
      ? query.error instanceof Error
        ? query.error.message
        : "Unable to load program stats"
      : ""
  };
}
