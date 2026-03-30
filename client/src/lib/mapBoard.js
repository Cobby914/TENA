const placeholder = "/logoplaceholder.png";

function resolveImageSrc(member) {
  const imageKey = String(member.profile_image_key ?? member.image_key ?? "").trim();
  if (!imageKey) return placeholder;

  if (/^https?:\/\//i.test(imageKey)) return imageKey;
  if (imageKey.startsWith("/")) return imageKey;
  if (imageKey.startsWith("team/")) return `/${imageKey}`;
  return `/team/${imageKey}`;
}

export function toBoardCardMember(member, index) {
  const first = String(member.first_name ?? "").trim();
  const last = String(member.last_name ?? "").trim();
  const name = `${first} ${last}`.trim() || `Board Member ${index + 1}`;
  const role = String(member.role ?? "Board Member").trim() || "Board Member";

  return {
    id: member.id != null ? String(member.id) : `${name}-${index}`,
    name,
    role,
    imageSrc: resolveImageSrc(member),
    displayOrder:
      Number.isInteger(Number(member.display_order)) ? Number(member.display_order) : Number.MAX_SAFE_INTEGER
  };
}
