import { useEffect, useMemo, useState } from "react";
import { getBoard } from "./boardApi";
import { BoardMember } from "./mapBoard";

export function createBoard(){
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        setLoading(true);
        const rows = await getBoard(controller.signal);
        setMembers(rows);
      } catch (err) {
        if (err?.name === "AbortError") return;
        setError(err instanceof Error ? err.message : "Unable to load team members",
        );
      } finally {
        setLoading(false);
      }

    })();

    return () => controller.abort();
  }, []);

  const board = useMemo(() => members.map(( (m,i) =>BoardMember(m, i)),[members]))

  return {board, loading, error}
}