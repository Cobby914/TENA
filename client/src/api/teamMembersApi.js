/**
 * Team roster and cohort data from the backend (`/api/team-members`, `/api/cohorts`, etc.).
 * Endpoints use kebab-case and snake_case fallbacks where the server may expose either style.
 */
const RAW_API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";
const API_BASE = RAW_API_BASE.replace(/\/+$/, "");

/** Tries each URL in order until one returns a JSON array (handles API naming differences). */
async function fetchArrayWithFallback(endpoints, signal) {
  let lastError;

  for (const endpoint of endpoints) {
    try {
      const res = await fetch(endpoint, { signal });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);

      const data = await res.json();
      if (!Array.isArray(data)) throw new Error("Expected an array response");
      return data;
    } catch (err) {
      if (err?.name === "AbortError") throw err;
      lastError = err;
    }
  }

  throw lastError ?? new Error("Failed to load data");
}

/** All team members (both naming conventions). Used by admin team management. */
export async function fetchTeamMembers(signal) {
  return fetchArrayWithFallback(
    [`${API_BASE}/api/team-members`, `${API_BASE}/api/team_members`],
    signal
  );
}

/** Members filtered by type, e.g. `"team"` for the public Our Team page. */
export async function fetchMembersByType(typeName, signal) {
  const safeType = String(typeName ?? "").trim().toLowerCase();
  if (!safeType) throw new Error("typeName is required");

  return fetchArrayWithFallback(
    [
      `${API_BASE}/api/team-members/by-type/${safeType}`,
      `${API_BASE}/api/team_members/by-type/${safeType}`
    ],
    signal
  );
}

/** Cohort list for term/year groupings and filters. */
export async function fetchCohorts(signal) {
  return fetchArrayWithFallback([`${API_BASE}/api/cohorts`], signal);
}
