/**
 * JSON API origin with no trailing slash. Empty string means same origin (Vercel + static client).
 */
export function getApiBaseUrl() {
  const raw = import.meta.env.VITE_API_BASE_URL;
  if (raw !== undefined && raw !== null && String(raw).trim() !== "") {
    return String(raw).trim().replace(/\/+$/, "");
  }
  if (import.meta.env.DEV) {
    return "http://localhost:3001";
  }
  return "";
}
