const programImageModules = import.meta.glob("../../assets/programs/*", {
  eager: true,
  import: "default",
});

const programImageByFilename = Object.entries(programImageModules).reduce(
  (acc, [modulePath, url]) => {
    const filename = modulePath.split("/").pop();
    if (filename) acc[filename.toLowerCase()] = url;
    return acc;
  },
  {},
);

function normalizeImageKey(value) {
  return String(value ?? "")
    .trim()
    .replace(/\\/g, "/")
    .replace(/^\/+/, "")
    .replace(/^client\/src\/assets\/programs\//i, "")
    .replace(/^src\/assets\/programs\//i, "")
    .replace(/^assets\/programs\//i, "")
    .replace(/^programs\//i, "");
}

export function resolveProgramImage(imageKey, fallback = "") {
  const raw = String(imageKey ?? "").trim();
  if (!raw) return fallback;
  if (/^https?:\/\//i.test(raw)) return raw;

  const cleanKey = raw.split("?")[0].split("#")[0];
  const normalized = normalizeImageKey(cleanKey).toLowerCase();

  if (normalized && programImageByFilename[normalized]) {
    return programImageByFilename[normalized];
  }

  // Supports public/ assets if key is already a web path.
  if (cleanKey.startsWith("/")) return cleanKey;
  if (/^(programs|images|team)\//i.test(cleanKey)) return `/${cleanKey}`;

  return fallback;
}
