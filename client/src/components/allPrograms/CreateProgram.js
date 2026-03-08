import { useEffect, useMemo, useState } from "react";
import { getProgram } from "./ProgramAPI";
import { Program } from "./ProgramMap";

export function createProgram(){
  const [programs, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        setLoading(true);
        const rows = await getProgram(controller.signal);
        setMembers(rows);
      } catch (err) {
        if (err?.name === "AbortError") return;
        setError(err instanceof Error ? err.message : "Unable to load programs",
        );
      } finally {
        setLoading(false);
      }

    })();

    return () => controller.abort();
  }, []);

 const prog = useMemo(() => programs.map((m, i) => Program(m, i)), [programs]);
  return {prog, loading, error}
}