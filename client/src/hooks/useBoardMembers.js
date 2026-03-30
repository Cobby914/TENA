import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getBoard } from "../api/boardApi";
import { toBoardCardMember } from "../lib/mapBoard";

export function useBoardMembers() {
  const query = useQuery({
    queryKey: ["team", "board"],
    queryFn: ({ signal }) => getBoard(signal)
  });

  const rawMembers = query.data ?? [];

  const board = useMemo(() => {
    return rawMembers
      .map(toBoardCardMember)
      .sort((a, b) => (a.displayOrder - b.displayOrder) || a.name.localeCompare(b.name));
  }, [rawMembers]);

  return {
    board,
    loading: query.isPending,
    error: query.error
      ? query.error instanceof Error
        ? query.error.message
        : "Unable to load board members"
      : ""
  };
}
