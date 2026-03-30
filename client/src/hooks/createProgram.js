import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPrograms } from "../api/programsAPI";
import { Program } from "../lib/programMap";

export function createProgram() {
  const query = useQuery({
    queryKey: ["programs", "list", "all"],
    queryFn: ({ signal }) => fetchPrograms(undefined, signal)
  });

  const programs = query.data ?? [];
  const prog = useMemo(() => programs.map((m, i) => Program(m, i)), [programs]);

  return {
    prog,
    loading: query.isPending,
    error: query.error
      ? query.error instanceof Error
        ? query.error.message
        : "Unable to load programs"
      : null
  };
}
