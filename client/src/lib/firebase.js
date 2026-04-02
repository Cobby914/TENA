import { getApps, initializeApp } from "firebase/app";

function readConfig() {
  return {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || undefined,
  };
}

function isComplete(config) {
  return Boolean(
    config.apiKey &&
      config.authDomain &&
      config.projectId &&
      config.storageBucket &&
      config.messagingSenderId &&
      config.appId
  );
}

let cachedApp;

/**
 * Default Firebase app from env, or `null` if web app config is not set.
 * Use this before `getAuth`, `getFirestore`, etc.
 */
export function getFirebaseApp() {
  if (cachedApp) return cachedApp;
  const config = readConfig();
  if (!isComplete(config)) return null;
  cachedApp = getApps().length ? getApps()[0] : initializeApp(config);
  return cachedApp;
}

export function isFirebaseConfigured() {
  return isComplete(readConfig());
}
