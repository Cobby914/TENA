import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirebaseApp } from "../lib/firebase";

/**
 * Opens Google sign-in via Firebase (same OAuth client as Firebase Console → Auth → Google).
 * Then registers the session with the API using a Firebase ID token.
 *
 * @param {string} apiBase - e.g. import.meta.env.VITE_API_BASE_URL
 * @param {{ hostedDomain?: string }} [options] - optional Google Workspace `hd` hint
 * @returns {Promise<object>} API user row
 */
export async function completeGoogleAdminSignIn(apiBase, options = {}) {
  const { hostedDomain } = options;
  const app = getFirebaseApp();
  if (!app) {
    throw new Error("Firebase is not configured (missing VITE_FIREBASE_* env).");
  }

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  if (hostedDomain) {
    provider.setCustomParameters({ hd: hostedDomain });
  }

  const result = await signInWithPopup(auth, provider);
  const idToken = await result.user.getIdToken();

  const res = await fetch(`${apiBase.replace(/\/+$/, "")}/api/auth/google`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ idToken })
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data?.user) {
    const err = new Error(data?.error || "Unable to sign in");
    err.status = res.status;
    throw err;
  }

  return data.user;
}
