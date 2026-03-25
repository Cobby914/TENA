import placeholder from "../../assets/logoplaceholder.png";
import { resolveProgramImage } from "./programImageResolver";

export function Program(data, ind) {
  const title = String(data.title ?? "RandomTitle").trim();
  const summary = String(data.summary ?? "Insert Summary").trim();

  /* Use the following code once the program images becomes available and potentially the link


    "im" will be the image of the program and "link" will be the route to the page

    const imkey = typeof program.image_key === "string" ? program.image_key.trim() : "";
    
    const im = imkey ? imkey.startsWith("http") ? imakey: `/team/${imkey}` : placeholder;


    const link = program.link === "string" ? program.link.trim() : "/";

    If we don't end up using a link variable in the DB, we can create the link
    by using the title and prepending a "/"

    const link = "/" + title;
    */

  const imageKey =
    (typeof data.image_key === "string" && data.image_key.trim()) ||
    (typeof data.problem_image === "string" && data.problem_image.trim()) ||
    "";
  const im = resolveProgramImage(imageKey, placeholder);
  const providedLink = typeof data.link === "string" ? data.link.trim() : "";
  const normalizedTitle = title.toLowerCase().replace(/[^a-z0-9]+/g, "");
  const generatedLinkByTitle = {
    carenavigation: "/programs/carenavigation",
    communityhealthfairs: "/programs/communityhealthfairs",
    prehealthworkforcereadiness: "/programs/prehealthworkforcereadiness",
    fitclub: "/programs/fitclub",
  };
  const link = providedLink || generatedLinkByTitle[normalizedTitle] || "/";

  const id = String(data.id).trim();

  const reversed = ind % 2 !== 0;

  return { id, title, summary, im, link, reversed };
}
