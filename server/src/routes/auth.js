import { Router } from "express";
import { sql } from "../db/index.js";
import { verifyAuth, requireApproved } from "../middleware/auth.js";
import { verifyFirebaseIdToken } from "../lib/firebaseAdmin.js";

const router = Router();

function normalizeName(value) {
  if (typeof value !== "string") return null;
  const normalized = value.trim();
  return normalized.length ? normalized : null;
}

function namesFromDecoded(decoded) {
  let firstName = null;
  let lastName = null;
  const name = typeof decoded.name === "string" ? decoded.name.trim() : "";
  if (name) {
    const parts = name.split(/\s+/).filter(Boolean);
    if (parts.length > 0) {
      firstName = parts[0];
      lastName = parts.length > 1 ? parts.slice(1).join(" ") : null;
    }
  }
  return { firstName, lastName };
}

function googleProviderSubject(decoded) {
  const ids = decoded.firebase?.identities?.["google.com"];
  if (Array.isArray(ids) && ids[0]) {
    return String(ids[0]);
  }
  return String(decoded.uid ?? "");
}

router.post("/google", async (req, res, next) => {
  try {
    const { idToken } = req.body ?? {};
    if (!idToken || typeof idToken !== "string") {
      return res.status(400).json({ error: "idToken is required" });
    }

    const decoded = await verifyFirebaseIdToken(idToken);

    const email = String(decoded.email ?? "").trim().toLowerCase();
    if (!email) {
      return res.status(401).json({ error: "Invalid token: missing email" });
    }

    const emailVerified = Boolean(decoded.email_verified);
    const { firstName, lastName } = namesFromDecoded(decoded);
    const googleSub = googleProviderSubject(decoded);
    if (!googleSub) {
      return res.status(401).json({ error: "Invalid token: missing identity" });
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
      VALUES (${user.id}, 'google', ${googleSub})
      ON CONFLICT (provider_id)
      DO UPDATE
      SET user_id = EXCLUDED.user_id, provider = EXCLUDED.provider
    `;

    res.json({ user });
  } catch (err) {
    const code = err?.code ?? "";
    if (typeof code === "string" && code.startsWith("auth/")) {
      return res.status(401).json({ error: "Invalid or expired token" });
    }
    if (err?.message?.toLowerCase?.().includes("token")) {
      return res.status(401).json({ error: "Invalid token" });
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
