import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCohorts, fetchMembersByType } from "../api/teamMembersApi";
import { toCardMember, toCohortOption } from "../lib/teamMemberMapper";

export function useTeamMembers() {
  const query = useQuery({
    queryKey: ["team", "public", "roster"],
    queryFn: async ({ signal }) => {
      const [teamMembers, cohorts] = await Promise.all([
        fetchMembersByType("team", signal),
        fetchCohorts(signal)
      ]);
      return { teamMembers, cohorts };
    }
  });

  const rawTeamMembers = query.data?.teamMembers ?? [];
  const rawCohorts = query.data?.cohorts ?? [];

  const members = useMemo(() => {
    return rawTeamMembers
      .map(toCardMember)
      .sort((a, b) => (a.displayOrder - b.displayOrder) || a.name.localeCompare(b.name));
  }, [rawTeamMembers]);

  const cohorts = useMemo(() => {
    return rawCohorts
      .map(toCohortOption)
      .sort((a, b) => {
        if (a.year !== null && b.year !== null && a.year !== b.year) return b.year - a.year;
        if (a.termOrder !== b.termOrder) return a.termOrder - b.termOrder;
        return a.title.localeCompare(b.title);
      });
  }, [rawCohorts]);

  return {
    members,
    cohorts,
    loading: query.isPending,
    errorMsg: query.error
      ? query.error instanceof Error
        ? query.error.message
        : "Unable to load team members"
      : ""
  };
}
