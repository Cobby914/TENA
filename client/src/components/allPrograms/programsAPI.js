const RAW_API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";
const API_BASE = RAW_API_BASE.replace(/\/+$/, "");
const baseEndpoint = `${API_BASE}/api/programs`;

let lastError;

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