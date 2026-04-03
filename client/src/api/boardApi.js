/**
 * Board-of-directors listing: same underlying data as team members but filtered to
 * `by-type/board`. The Our Board page loads this through the `useBoardMembers` hook.
 */
import { getApiBaseUrl } from "../lib/apiBase.js";

const API_BASE = getApiBaseUrl();

/** Loads board members; tries kebab-case and snake_case route variants. */
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
