import { create } from "zustand";
import {
  getAuthSession,
  setAuthSession as persistSession,
  clearAuthSession as clearPersistedSession,
  signOutFromFirebase,
} from "../auth/session";

export const useAuthStore = create((set) => ({
  session: getAuthSession(),
  setSession: (session) => {
    persistSession(session);
    set({ session });
  },
  clearSession: () => {
    void signOutFromFirebase();
    clearPersistedSession();
    set({ session: null });
  },
}));
