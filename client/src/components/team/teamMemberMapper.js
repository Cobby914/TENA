import placeholder from "../../assets/logoplaceholder.png";

//Display API Function
export function toCardMember(member, index) {
  const first = String(member.first_name ?? "").trim();
  const last = String(member.last_name ?? "").trim();
  const name = `${first} ${last}`.trim() || "Unknown Member";

  const role = String(member.role ?? "Position in Organization").trim();
  const cohort = String(member.cohort ?? "").trim();
  const imageKey =
    typeof member.image_key === "string" ? member.image_key.trim() : "";

  const imageSrc = imageKey
    ? imageKey.startsWith("http")
      ? imageKey
      : `/team/${imageKey}`
    : placeholder;

  return {
    id: member.id != null ? String(member.id) : `${name}-${index}`,
    name,
    role,
    cohort,
    imageSrc,
  };
}
