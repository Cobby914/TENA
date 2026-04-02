import { resolveProgramImage } from "./programImageResolver";
import { createProgramSlug } from "./programSlug";

const placeholder = "/logoplaceholder.png";

export function Program(data, ind) {
  const title = String(data.title ?? "RandomTitle").trim();
  const summary = String(data.summary ?? "Insert Summary").trim();
  const description = String(data.description ?? "").trim();

  const background_image = typeof data.background_image === "string" ? data.background_image.trim() : "";
  const im = resolveProgramImage(background_image, placeholder);

  const link = `/programs/${createProgramSlug(title)}`;

  const id = String(data.id).trim();
  const reversed = ind % 2 !== 0;

  return { id, title, summary, description, im, link, reversed };
}
