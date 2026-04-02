import { readFileSync, existsSync } from "fs";
import dotenv from "dotenv";

dotenv.config();

function validateFirebaseCredentials() {
  const path = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;
  const json = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (path) {
    if (!existsSync(path)) {
      throw new Error(`FIREBASE_SERVICE_ACCOUNT_PATH file not found: ${path}`);
    }
    JSON.parse(readFileSync(path, "utf8"));
  } else if (json) {
    JSON.parse(json);
  } else {
    throw new Error(
      "Missing Firebase Admin credentials: set FIREBASE_SERVICE_ACCOUNT_JSON or FIREBASE_SERVICE_ACCOUNT_PATH"
    );
  }
}

const required = ["DATABASE_URL"];

required.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing required env variable: ${key}`);
  }
});

validateFirebaseCredentials();

export const env = {
  port: process.env.PORT || 3001,
  databaseUrl: process.env.DATABASE_URL,
  nodeEnv: process.env.NODE_ENV || "development",
  firebaseServiceAccountJson: process.env.FIREBASE_SERVICE_ACCOUNT_JSON || "",
  firebaseServiceAccountPath: process.env.FIREBASE_SERVICE_ACCOUNT_PATH || ""
};
