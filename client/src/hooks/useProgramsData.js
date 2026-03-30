import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPrograms } from "../api/programsAPI";

export function useProgramData(limit) {
  const query = useQuery({
    queryKey: ["programs", "list", limit ?? null],
    queryFn: ({ signal }) => fetchPrograms(limit, signal)
  });

  const programs = useMemo(() => query.data ?? [], [query.data]);

  return {
    programs,
    errorMsg: query.error
      ? query.error instanceof Error
        ? query.error.message
        : "Unable to load admin data"
      : "",
    isLoading: query.isPending
  };
}
