import { OAuth2Client } from "google-auth-library";
import { env } from "../config/env.js";

const client = new OAuth2Client(env.googleClientId);

export async function verifyAuth(req, res, next) {
  try {
    const token = req.headers.authorization?.split("Bearer ")[1];
    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: env.googleClientId
    });

    req.user = ticket.getPayload();
    next();
  } catch {
    res.status(401).json({ error: "Unauthorized" });
  }
}
