import { OAuth2Client } from "google-auth-library";
import { env } from "../config/env.js";
import { sql } from "../db/index.js";

const client = new OAuth2Client(env.googleClientId);

export async function verifyAuth(req, res, next) {
  try {
    if (!env.googleClientId) {
      return res.status(500).json({ error: "GOOGLE_CLIENT_ID is not configured" });
    }

    const authHeader = req.headers.authorization ?? "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: env.googleClientId
    });

    const payload = ticket.getPayload();
    const email = String(payload?.email ?? "").trim().toLowerCase();
    if (!email) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const rows = await sql`
      SELECT id, email, first_name, last_name, auth_type, role, is_verified, created_at
      FROM "TENA_Admin".users
      WHERE email = ${email}
      LIMIT 1
    `;

    if (rows.length === 0) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    req.user = payload;
    req.authUser = rows[0];
    next();
  } catch {
    res.status(401).json({ error: "Unauthorized" });
  }
}

export function requireApproved(req, res, next) {
  const role = String(req.authUser?.role ?? "").toLowerCase();
  if (!req.authUser?.is_verified || role === "pending" || role === "denied") {
    return res.status(403).json({ error: "Account is not approved" });
  }
  next();
}

export function requireRole(...allowedRoles) {
  const allowed = new Set(allowedRoles.map((role) => String(role).toLowerCase()));

  return (req, res, next) => {
    const role = String(req.authUser?.role ?? "").toLowerCase();
    if (!allowed.has(role)) {
      return res.status(403).json({ error: "Forbidden" });
    }
    next();
  };
}
