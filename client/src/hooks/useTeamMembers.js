import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCohorts, fetchMembersByType } from "../api/teamMembersApi";
import { toCardMember, toCohortOption } from "../lib/teamMemberMapper";

export function useTeamMembers() {
  const query = useQuery({
    queryKey: ["team", "public", "roster"],
    queryFn: async ({ signal }) => {
      const [teamMembers, cohorts, interns] = await Promise.all([
        fetchMembersByType("team", signal),
        fetchCohorts(signal),
        fetchMembersByType("intern", signal)
      ]);
      return { teamMembers, cohorts, interns };
    }
  });

  const rawTeamMembers = query.data?.teamMembers ?? [];
  const rawCohorts = query.data?.cohorts ?? [];
  const rawInterns = query.data?.interns ?? [];

  const members = useMemo(() => {
    return rawTeamMembers
      .map(toCardMember)
      .sort((a, b) => (a.displayOrder - b.displayOrder) || a.name.localeCompare(b.name));
  }, [rawTeamMembers]);

  const internCards = useMemo(() => {
    return rawInterns.map(toCardMember);
  }, [rawInterns]);

  const cohorts = useMemo(() => {
    return rawCohorts
      .map(toCohortOption)
      .sort((a, b) => {
        return (b.termOrder ?? 0) - (a.termOrder ?? 0)
      })
      .map((cohort) => ({
        ...cohort,
        interns:
          cohort.numericId != null
            ? internCards.filter((m) => m.cohortId === cohort.numericId)
            : []
      }));
  }, [rawCohorts, internCards]);

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
