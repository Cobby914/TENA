import { resolveMemberImageSrc } from "./memberImageResolver";

export { memberImagePlaceholder, resolveMemberImage, resolveMemberImageSrc } from "./memberImageResolver";

export function normalizeLinkedInUrl(raw) {
  const s = String(raw ?? "").trim();
  if (!s) return null;
  if (/^https?:\/\//i.test(s)) return s;
  return `https://${s.replace(/^\/+/, "")}`;
}

export function toCardMember(member, index) {
  const first = String(member.first_name ?? "").trim();
  const last = String(member.last_name ?? "").trim();
  const name = `${first} ${last}`.trim() || `Member ${index + 1}`;
  const role = String(member.role ?? "Position in Organization").trim() || "Position in Organization";

  const cohortIdRaw = member.cohort_id;
  const cohortId =
    cohortIdRaw != null && cohortIdRaw !== ""
      ? Number(cohortIdRaw)
      : null;

  return {
    id: member.id != null ? String(member.id) : `${name}-${index}`,
    name,
    role,
    cohortId: Number.isFinite(cohortId) ? cohortId : null,
    cohortName: String(member.cohort_name ?? "").trim(),
    imageSrc: resolveMemberImageSrc(member),
    linkedinUrl: normalizeLinkedInUrl(member.linkedin_link),
    displayOrder:
      Number.isInteger(Number(member.display_order)) ? Number(member.display_order) : Number.MAX_SAFE_INTEGER
  };
}

export function toCohortOption(cohort, index) {
  const title =
    String(cohort.title ?? cohort.name ?? "").trim() ||
    `${String(cohort.year ?? "").trim()} ${String(cohort.term ?? "").trim()} Cohort`.trim() ||
    `Cohort ${index + 1}`;

  const cohortIdRaw = cohort.id;
  const cohortNumericId =
    cohortIdRaw != null && cohortIdRaw !== ""
      ? Number(cohortIdRaw)
      : null;

  return {
    id: cohort.id ?? `${title}-${index}`,
    numericId: Number.isFinite(cohortNumericId) ? cohortNumericId : null,
    title,
    year: Number.isInteger(Number(cohort.year)) ? Number(cohort.year) : null,
    term: String(cohort.term ?? "").trim(),
    termOrder:
      Number.isInteger(Number(cohort.term_order)) ? Number(cohort.term_order) : Number.MAX_SAFE_INTEGER
  };
}
