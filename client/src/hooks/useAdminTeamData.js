import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCohorts, fetchTeamMembers } from "../api/teamMembersApi";

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
  const memberTypes = Array.isArray(member.member_types)
    ? member.member_types.map((type) => String(type ?? "").toLowerCase())
    : [];
  const hasCohort = member.cohort_id != null || String(member.cohort_name ?? "").trim().length > 0;

  return hasCohort || memberTypes.includes("intern") || /\bintern\b/.test(role);
}

export function useAdminTeamData() {
  const query = useQuery({
    queryKey: ["team", "admin", "roster"],
    queryFn: async ({ signal }) => {
      const [teamMembers, cohorts] = await Promise.all([
        fetchTeamMembers(signal),
        fetchCohorts(signal)
      ]);
      return { teamMembers, cohorts };
    }
  });

  const rawTeamMembers = query.data?.teamMembers ?? [];
  const rawCohorts = query.data?.cohorts ?? [];

  const teamMembers = useMemo(() => {
    return rawTeamMembers.filter((member) => !isIntern(member)).map(toAdminMember);
  }, [rawTeamMembers]);

  const cohorts = useMemo(() => rawCohorts.map(toAdminCohort), [rawCohorts]);

  return {
    teamMembers,
    cohorts,
    errorMsg: query.error
      ? query.error instanceof Error
        ? query.error.message
        : "Unable to load admin data"
      : ""
  };
}
