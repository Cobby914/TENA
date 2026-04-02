import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirebaseApp } from "../lib/firebase";
import { getAuthSession } from "./session";
import { useAuthStore } from "../store/useAuthStore";

/**
 * Waits for Firebase auth to finish restoring so getIdToken() works after refresh.
 * Clears stale local sessions if Firebase has no user.
 */
export default function FirebaseAuthGate({ children }) {
  const [ready, setReady] = useState(() => !getFirebaseApp());
  const clearSession = useAuthStore((s) => s.clearSession);

  useEffect(() => {
    const app = getFirebaseApp();
    if (!app) {
      setReady(true);
      return undefined;
    }

    const auth = getAuth(app);
    const unsub = onAuthStateChanged(auth, (user) => {
      const session = getAuthSession();
      if (!user && session?.user) {
        clearSession();
      }
      setReady(true);
    });

    return unsub;
  }, [clearSession]);

  if (!ready) {
    return null;
  }

  return children;
}
