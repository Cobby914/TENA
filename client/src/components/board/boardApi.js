const RAW_API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";
const API_BASE = RAW_API_BASE.replace(/\/+$/, "");

export async function getBoard(signal) {
  const endpoints = [
    `${API_BASE}/api/team-members/by-type/board`,
    `${API_BASE}/api/team_members/by-type/board`
  ];

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

  throw lastError ?? new Error("Failed to load board members");
}

