import { Router } from "express";
import { OAuth2Client } from "google-auth-library";
import { sql } from "../db/index.js";
import { env } from "../config/env.js";
import { verifyAuth, requireApproved } from "../middleware/auth.js";

const router = Router();
const client = new OAuth2Client(env.googleClientId);

function normalizeName(value) {
  if (typeof value !== "string") return null;
  const normalized = value.trim();
  return normalized.length ? normalized : null;
}

router.post("/google", async (req, res, next) => {
  try {
    if (!env.googleClientId) {
      return res.status(500).json({ error: "GOOGLE_CLIENT_ID is not configured" });
    }

    const { credential } = req.body ?? {};
    if (!credential || typeof credential !== "string") {
      return res.status(400).json({ error: "credential is required" });
    }

    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: env.googleClientId
    });
    const payload = ticket.getPayload();

    if (!payload?.email || !payload?.sub) {
      return res.status(401).json({ error: "Invalid Google token payload" });
    }

    const email = String(payload.email).trim().toLowerCase();
    const emailVerified = Boolean(payload.email_verified);
    let firstName = normalizeName(payload.given_name);
    let lastName = normalizeName(payload.family_name);
    if ((!firstName || !lastName) && typeof payload.name === "string") {
      const parts = payload.name.trim().split(/\s+/).filter(Boolean);
      if (parts.length > 0) {
        firstName = firstName ?? parts[0];
        lastName = lastName ?? (parts.length > 1 ? parts.slice(1).join(" ") : null);
      }
    }

    let user =
      (
        await sql`
          SELECT id, email, first_name, last_name, auth_type, role, is_verified, created_at
          FROM "TENA_Admin".users
          WHERE email = ${email}
          LIMIT 1
        `
      )[0] ?? null;

    if (!user) {
      user = (
        await sql`
          INSERT INTO "TENA_Admin".users (email, first_name, last_name, auth_type, is_verified)
          VALUES (${email}, ${firstName}, ${lastName}, 'oauth', ${emailVerified})
          RETURNING id, email, first_name, last_name, auth_type, role, is_verified, created_at
        `
      )[0];
    } else {
      user = (
        await sql`
          UPDATE "TENA_Admin".users
          SET
            is_verified = ${emailVerified},
            first_name = COALESCE(${firstName}, first_name),
            last_name = COALESCE(${lastName}, last_name)
          WHERE id = ${user.id}
          RETURNING id, email, first_name, last_name, auth_type, role, is_verified, created_at
        `
      )[0];
    }

    const role = String(user.role ?? "").toLowerCase();
    if (role === "pending" || role === "denied") {
      return res.status(403).json({ error: "Account is not approved", user });
    }

    await sql`
      DELETE FROM "TENA_Admin".oauth_accounts
      WHERE user_id = ${user.id}
    `;

    await sql`
      INSERT INTO "TENA_Admin".oauth_accounts (user_id, provider, provider_id)
      VALUES (${user.id}, 'google', ${payload.sub})
      ON CONFLICT (provider_id)
      DO UPDATE
      SET user_id = EXCLUDED.user_id, provider = EXCLUDED.provider
    `;

    res.json({ user });
  } catch (err) {
    if (err?.message?.toLowerCase?.().includes("token")) {
      return res.status(401).json({ error: "Invalid Google token" });
    }
    next(err);
  }
});

router.get("/me", verifyAuth, requireApproved, async (req, res, next) => {
  try {
    const email = String(req.user?.email ?? "").trim().toLowerCase();
    if (!email) return res.status(401).json({ error: "Unauthorized" });

    const rows = await sql`
      SELECT id, email, first_name, last_name, auth_type, role, is_verified, created_at
      FROM "TENA_Admin".users
      WHERE email = ${email}
      LIMIT 1
    `;

    if (rows.length === 0) {
      return res.status(404).json({ error: "User Not Found" });
    }

    res.json({ user: rows[0] });
  } catch (err) {
    next(err);
  }
});

export default router;
