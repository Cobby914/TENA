import { useQuery } from "@tanstack/react-query";
import { fetchProgramById } from "../api/programsAPI";

export function useProgramById(id) {
  const query = useQuery({
    queryKey: ["programs", "detail", id],
    queryFn: ({ signal }) => fetchProgramById(id, signal),
    enabled: id != null && id !== ""
  });

  return {
    program: query.data ?? null,
    isLoading: query.isPending,
    errorMsg: query.error
      ? query.error instanceof Error
        ? query.error.message
        : "Unable to load program"
      : ""
  };
}
