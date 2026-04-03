import { normalizeLinkedInUrl, resolveMemberImageSrc } from "./teamMemberMapper";

export function toBoardCardMember(member, index) {
  const first = String(member.first_name ?? "").trim();
  const last = String(member.last_name ?? "").trim();
  const name = `${first} ${last}`.trim() || `Board Member ${index + 1}`;
  const role = String(member.role ?? "Board Member").trim() || "Board Member";

  return {
    id: member.id != null ? String(member.id) : `${name}-${index}`,
    name,
    role,
    imageSrc: resolveMemberImageSrc(member),
    linkedinUrl: normalizeLinkedInUrl(member.linkedin_link),
    displayOrder:
      Number.isInteger(Number(member.display_order)) ? Number(member.display_order) : Number.MAX_SAFE_INTEGER
  };
}
