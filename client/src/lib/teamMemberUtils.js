export const DEFAULT_COHORTS = [
  "2023 Winter Cohort",
  "2023 Fall Cohort",
  "2023 Summer Cohort",
];

//Group Members
export function isIntern(member) {
  const role = member.role.toLowerCase();
  return Boolean(member.cohort) || /\bintern\b/.test(role);
}

export function isBoardMember(member) {
  const role = member.role.toLowerCase();
  return /\bboard\b/.test(role) || !isIntern(member);
}

//Build and Order Cohorts Drop-downs
export function buildCohortEntries(members) {
  const internsByCohort = members.reduce((acc, member) => {
    if (!isIntern(member)) return acc;

    const key = member.cohort || "2023 Winter Cohort";
    (acc[key] ??= []).push(member);
    return acc;
  }, {});

  const map = new Map(Object.entries(internsByCohort));
  const ordered = DEFAULT_COHORTS.map((name) => [name, map.get(name) ?? []]);

  const dynamic = Array.from(map.entries())
    .filter(([name]) => !DEFAULT_COHORTS.includes(name))
    .sort(([a], [b]) => a.localeCompare(b));

  return [...ordered, ...dynamic];
}
