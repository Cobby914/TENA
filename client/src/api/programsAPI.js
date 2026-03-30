/**
 * HTTP client for public program content from `/api/programs`.
 * Used by program listing pages, home “Programs” section, hooks, and admin dashboards.
 */
const RAW_API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";
const API_BASE = RAW_API_BASE.replace(/\/+$/, "");
const baseEndpoint = `${API_BASE}/api/programs`;

let lastError;

/** Loads all programs. Optional `limit` adds `?limit=` for capped lists. */
export async function fetchPrograms(limit, signal) {
  try {
    const query = limit ? `?limit=${limit}` : "";
    const res = await fetch(baseEndpoint + query, { signal });
    if (!res.ok) throw new Error(`Request failed (${res.status})`);
    const data = await res.json();
    if (!Array.isArray(data)) throw new Error("Expected an array response");
    return data;
  } catch (err) {
    if (err?.name === "AbortError") throw err;
    lastError = err;
  }
  throw lastError ?? new Error("Failed to load programs");
}

/** Loads a single program record by id (used on individual program detail views). */
export async function fetchProgramById(id, signal) {
  try {
    const res = await fetch(`${baseEndpoint}/${id}`, { signal });
    if (!res.ok) throw new Error(`Request failed (${res.status})`);
    return await res.json();
  } catch (err) {
    if (err?.name === "AbortError") throw err;
    lastError = err;
  }
  throw lastError ?? new Error("Failed to load program");
}

/** Program stat rows for a given program id (`?program_id=`). */
export async function fetchProgramStatsByProgramId(programId, signal) {
  try {
    const res = await fetch(`${API_BASE}/api/program_stats?program_id=${programId}`, {
      signal
    });
    if (!res.ok) throw new Error(`Request failed (${res.status})`);
    const data = await res.json();
    if (!Array.isArray(data)) throw new Error("Expected an array response");
    return data;
  } catch (err) {
    if (err?.name === "AbortError") throw err;
    lastError = err;
  }
  throw lastError ?? new Error("Failed to load program stats");
}
