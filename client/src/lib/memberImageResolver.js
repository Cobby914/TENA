/**
 * Resolves team / board / intern `profile_image_key` values from the API into URLs,
 * following the same patterns as {@link ./programImageResolver.js}.
 *
 * Headshots live under `client/public/MemberPhotos` → served as `/MemberPhotos/…`.
 * Table values may be: full https URLs, site-root paths (`/…`), relative paths like
 * `MemberPhotos/foo.jpg`, optional `public/` or `client/public/` prefixes, Windows
 * backslashes, or a bare filename (resolved under `/MemberPhotos/`).
 */

export const memberImagePlaceholder = "/logoplaceholder.png";

/**
 * Optional: map lowercase filename → exact public URL (e.g. when the DB stores only a
 * basename or an alias). Add entries the same way as `programImageByFilename`.
 */
const memberImageByFilename = {
  // "example_headshot.jpg": "/MemberPhotos/Example_Headshot.jpg",
};

/**
 * Strips common path noise and returns the basename for alias lookup (mirrors
 * `normalizeImageKey` in programImageResolver).
 */
function normalizeMemberImageKey(value) {
  return String(value ?? "")
    .trim()
    .replace(/\\/g, "/")
    .replace(/^\/+/, "")
    .replace(/^client\/public\/memberphotos\//i, "")
    .replace(/^public\/memberphotos\//i, "")
    .replace(/^client\/public\/team\//i, "")
    .replace(/^public\/team\//i, "")
    .replace(/^client\/public\/images\//i, "")
    .replace(/^public\/images\//i, "")
    .replace(/^memberphotos\//i, "")
    .replace(/^team\//i, "")
    .replace(/^images\//i, "")
    .replace(/^client\/public\/programs\//i, "")
    .replace(/^public\/programs\//i, "")
    .replace(/^programs\//i, "")
    .split("/")
    .pop();
}

/**
 * Handles DB values that include a full disk path or deep folder chain but still
 * contain `MemberPhotos/…` (e.g. `C:\…\client\public\MemberPhotos\Jane.jpg`).
 */
function urlFromMemberPhotosSegment(forwardSlashes) {
  const f = forwardSlashes.trim();
  const m = /(?:^|\/)(MemberPhotos\/[^?#]+)/i.exec(f);
  if (!m) return null;
  const tail = m[1].replace(/\/+$/, "");
  return tail ? `/${tail}` : null;
}

/**
 * @param {string | null | undefined} imageKey - `profile_image_key` or `image_key` from the API
 * @param {string} [fallback] - default `/logoplaceholder.png`
 * @returns {string}
 */
export function resolveMemberImage(imageKey, fallback = memberImagePlaceholder) {
  const raw = String(imageKey ?? "").trim();
  if (!raw) return fallback;
  if (/^https?:\/\//i.test(raw)) return raw;

  const cleanKey = raw.split("?")[0].split("#")[0];
  const normalized = normalizeMemberImageKey(cleanKey).toLowerCase();

  if (normalized && memberImageByFilename[normalized]) {
    return memberImageByFilename[normalized];
  }

  const forward = cleanKey.replace(/\\/g, "/").trim();
  if (forward.startsWith("/")) return forward;

  const fromMemberPhotos = urlFromMemberPhotosSegment(forward);
  if (fromMemberPhotos) return fromMemberPhotos;

  const stripped = forward
    .replace(/^\/+/, "")
    .replace(/^client\/public\//i, "")
    .replace(/^public\//i, "");

  if (/^(memberphotos|team|images|programs)\//i.test(stripped)) {
    return `/${stripped}`;
  }

  if (stripped && !stripped.includes("/")) {
    return `/MemberPhotos/${stripped}`;
  }

  if (stripped.includes("/")) {
    return `/MemberPhotos/${stripped}`;
  }

  return fallback;
}

/**
 * @param {{ profile_image_key?: string, image_key?: string } | null | undefined} member
 * @param {string} [fallback]
 */
export function resolveMemberImageSrc(member, fallback) {
  return resolveMemberImage(
    member?.profile_image_key ?? member?.image_key,
    fallback ?? memberImagePlaceholder
  );
}
