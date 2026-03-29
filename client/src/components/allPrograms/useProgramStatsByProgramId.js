import { useEffect, useState } from "react";

const RAW_API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";
const API_BASE = RAW_API_BASE.replace(/\/+$/, "");
const PROGRAM_STATS_ENDPOINT = `${API_BASE}/api/program_stats`;

export function useProgramStatsByProgramId(programId) {
  const [stats, setStats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!programId) return;
    const controller = new AbortController();

    (async () => {
      setIsLoading(true);
      setErrorMsg("");
      try {
        const res = await fetch(`${PROGRAM_STATS_ENDPOINT}?program_id=${programId}`, {
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error(`Request failed (${res.status})`);
        }
        const data = await res.json();
        if (!Array.isArray(data)) {
          throw new Error("Expected an array response");
        }
        setStats(data);
      } catch (err) {
        if (err?.name === "AbortError") return;
        setErrorMsg(err instanceof Error ? err.message : "Unable to load program stats");
      } finally {
        setIsLoading(false);
      }
    })();

    return () => controller.abort();
  }, [programId]);

  return { stats, isLoading, errorMsg };
}
