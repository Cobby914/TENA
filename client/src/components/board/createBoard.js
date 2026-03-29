import { useEffect, useMemo, useState } from "react";
import { getBoard } from "./boardApi";
import { toBoardCardMember } from "./mapBoard";

export function useBoardMembers() {
  const [rawMembers, setRawMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        setLoading(true);
        const rows = await getBoard(controller.signal);
        setRawMembers(rows);
      } catch (err) {
        if (err?.name === "AbortError") return;
        setError(err instanceof Error ? err.message : "Unable to load board members");
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, []);

  const board = useMemo(() => {
    return rawMembers
      .map(toBoardCardMember)
      .sort((a, b) => (a.displayOrder - b.displayOrder) || a.name.localeCompare(b.name));
  }, [rawMembers]);

  return { board, loading, error };
}

