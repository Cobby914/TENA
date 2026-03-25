import { useEffect, useState } from "react";
import { fetchProgramById } from "./programsAPI";

export function useProgramById(id) {
  const [program, setProgram] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!id) return;
    const controller = new AbortController();

    (async () => {
      setIsLoading(true);
      setErrorMsg("");
      try {
        const data = await fetchProgramById(id, controller.signal);
        setProgram(data);
      } catch (err) {
        if (err?.name === "AbortError") return;
        setErrorMsg(err instanceof Error ? err.message : "Unable to load program");
      } finally {
        setIsLoading(false);
      }
    })();

    return () => controller.abort();
  }, [id]);

  return { program, isLoading, errorMsg };
}