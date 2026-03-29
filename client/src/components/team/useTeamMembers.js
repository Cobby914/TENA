import { useEffect, useMemo, useState } from "react";
import { fetchCohorts, fetchMembersByType } from "./teamMembersApi";
import { toCardMember, toCohortOption } from "./teamMemberMapper";

export function useTeamMembers() {
  const [rawTeamMembers, setRawTeamMembers] = useState([]);
  const [rawCohorts, setRawCohorts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        setLoading(true);
        const [teamMembers, cohorts] = await Promise.all([
          fetchMembersByType("team", controller.signal),
          fetchCohorts(controller.signal)
        ]);

        setRawTeamMembers(teamMembers);
        setRawCohorts(cohorts);
      } catch (err) {
        if (err?.name === "AbortError") return;
        setErrorMsg(err instanceof Error ? err.message : "Unable to load team members");
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, []);

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

  return { members, cohorts, loading, errorMsg };
}

