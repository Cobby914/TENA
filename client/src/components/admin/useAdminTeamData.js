import { useEffect, useMemo, useState } from "react";
import { fetchCohorts, fetchTeamMembers } from "../team/teamMembersApi";

function toAdminMember(member, index) {
  const first = String(member.first_name ?? "").trim();
  const last = String(member.last_name ?? "").trim();
  const name = `${first} ${last}`.trim() || `Member ${index + 1}`;
  const position = String(member.role ?? "Team Member").trim() || "Team Member";

  return {
    id: member.id != null ? String(member.id) : `${name}-${index}`,
    name,
    position
  };
}

function toAdminCohort(cohort, index) {
  return {
    id: cohort.id ?? `${cohort.title ?? "cohort"}-${index}`,
    title: cohort.title ?? `Cohort ${index + 1}`,
    enrollment: Number.isFinite(cohort.enrollment) ? cohort.enrollment : 0,
    status: cohort.status ?? "In Progress",
    name: cohort.name ?? "Program",
    participants: Array.isArray(cohort.participants) ? cohort.participants : [],
    members: cohort.members ?? { coordinator: "N/A", staff: [] }
  };
}

function isIntern(member) {
  const role = String(member.role ?? "").toLowerCase();
  const cohort = String(member.cohort ?? "").trim();
  return Boolean(cohort) || /\bintern\b/.test(role);
}

export function useAdminTeamData() {
  const [rawTeamMembers, setRawTeamMembers] = useState([]);
  const [rawCohorts, setRawCohorts] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        const [teamMembers, cohorts] = await Promise.all([
          fetchTeamMembers(controller.signal),
          fetchCohorts(controller.signal)
        ]);

        setRawTeamMembers(teamMembers);
        setRawCohorts(cohorts);
      } catch (err) {
        if (err?.name === "AbortError") return;
        setErrorMsg(err instanceof Error ? err.message : "Unable to load admin data");
      }
    })();

    return () => controller.abort();
  }, []);

  const teamMembers = useMemo(() => {
    return rawTeamMembers
      .filter((member) => !isIntern(member))
      .map(toAdminMember);
  }, [rawTeamMembers]);
  const cohorts = useMemo(() => rawCohorts.map(toAdminCohort), [rawCohorts]);

  return { teamMembers, cohorts, errorMsg };
}
