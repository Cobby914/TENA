import { readFileSync, existsSync } from "fs";
import admin from "firebase-admin";
import { env } from "../config/env.js";

function loadServiceAccount() {
  if (env.firebaseServiceAccountPath) {
    const p = env.firebaseServiceAccountPath;
    if (!existsSync(p)) {
      throw new Error(`FIREBASE_SERVICE_ACCOUNT_PATH not found: ${p}`);
    }
    return JSON.parse(readFileSync(p, "utf8"));
  }
  if (env.firebaseServiceAccountJson) {
    return JSON.parse(env.firebaseServiceAccountJson);
  }
  throw new Error("Firebase Admin credentials are not configured");
}

export function getAdminApp() {
  if (admin.apps.length) {
    return admin.app();
  }
  const sa = loadServiceAccount();
  return admin.initializeApp({ credential: admin.credential.cert(sa) });
}

export async function verifyFirebaseIdToken(idToken) {
  getAdminApp();
  return admin.auth().verifyIdToken(idToken);
}
