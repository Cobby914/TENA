import { getAuth, signOut } from "firebase/auth";
import { getFirebaseApp } from "../lib/firebase";

const STORAGE_KEY = "tena_auth_session";

export function getAuthSession() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed?.user) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function setAuthSession(session) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
}

export function clearAuthSession() {
  localStorage.removeItem(STORAGE_KEY);
}

export async function signOutFromFirebase() {
  const app = getFirebaseApp();
  if (!app) return;
  try {
    await signOut(getAuth(app));
  } catch {
    /* ignore */
  }
}

async function resolveIdToken() {
  const app = getFirebaseApp();
  if (app) {
    const auth = getAuth(app);
    const user = auth.currentUser;
    if (user) {
      try {
        return await user.getIdToken();
      } catch {
        /* fall through */
      }
    }
  }
  return getAuthSession()?.token ?? null;
}

/** @deprecated use withAuthHeaders */
export function getAuthToken() {
  return getAuthSession()?.token ?? null;
}

export async function withAuthHeaders(headers = {}) {
  const token = await resolveIdToken();
  if (!token) return headers;
  return {
    ...headers,
    Authorization: `Bearer ${token}`
  };
}
