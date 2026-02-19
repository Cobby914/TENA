import dotenv from "dotenv";

dotenv.config();

// const required = ["DATABASE_URL", "GOOGLE_CLIENT_ID"];
const required = ["DATABASE_URL"];

required.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing required env variable: ${key}`);
  }
});

export const env = {
  port: process.env.PORT || 3001,
  databaseUrl: process.env.DATABASE_URL,
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  nodeEnv: process.env.NODE_ENV || "development"
};
