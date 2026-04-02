import { verifyFirebaseIdToken } from "../lib/firebaseAdmin.js";
import { sql } from "../db/index.js";

export async function verifyAuth(req, res, next) {
  try {
    const authHeader = req.headers.authorization ?? "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }

    const decoded = await verifyFirebaseIdToken(token);
    const email = String(decoded.email ?? "").trim().toLowerCase();
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

    req.user = { email, uid: decoded.uid, sub: decoded.sub };
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
