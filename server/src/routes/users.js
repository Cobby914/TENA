import { Router } from "express";
import { sql } from "../db/index.js";
import { verifyAuth, requireApproved, requireRole } from "../middleware/auth.js";

const router = Router();
const VALID_AUTH_TYPES = new Set(["local", "oauth"]);
const VALID_ROLES = new Set(["pending", "user", "admin", "denied"]);

function normalizeEmail(value) {
  return String(value).trim().toLowerCase();
}

router.use(verifyAuth);
router.use(requireApproved);
router.use(requireRole("admin"));

// GET /api/users

router.get("/", async (req, res, next) => {
  try {
    const rows = await sql`
      SELECT id, email, auth_type, role, is_verified, created_at
      FROM "TENA_Admin".users
      ORDER BY id ASC
    `;
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

// GET /api/users/:id

router.get("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const rows = await sql`
      SELECT id, email, auth_type, role, is_verified, created_at
      FROM "TENA_Admin".users
      WHERE id = ${id}
    `;

    if (rows.length === 0) {
      return res.status(404).json({ error: "User Not Found" });
    }
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// POST /api/users (body: email, password_hash?, auth_type, role?, is_verified?)

router.post("/", async (req, res, next) => {
  try {
    const { email, password_hash, auth_type, role, is_verified } = req.body;

    if (!email || typeof email !== "string") {
      return res.status(400).json({ error: "email is required (string value)" });
    }
    if (!auth_type || typeof auth_type !== "string") {
      return res.status(400).json({ error: "auth_type is required (string value)" });
    }
    const normalizedEmail = normalizeEmail(email);
    const normalizedAuthType = String(auth_type).trim().toLowerCase();
    const normalizedRole = role === undefined ? "pending" : String(role).trim().toLowerCase();
    const verifiedValue = is_verified === undefined ? false : is_verified;

    if (!VALID_AUTH_TYPES.has(normalizedAuthType)) {
      return res.status(400).json({ error: "auth_type must be one of: local, oauth" });
    }
    if (!VALID_ROLES.has(normalizedRole)) {
      return res.status(400).json({ error: "role must be one of: pending, user, admin, denied" });
    }
    if (verifiedValue !== undefined && typeof verifiedValue !== "boolean") {
      return res.status(400).json({ error: "is_verified must be a boolean" });
    }
    if (normalizedAuthType === "local" && (!password_hash || typeof password_hash !== "string")) {
      return res.status(400).json({ error: "password_hash is required for local auth_type" });
    }
    if (normalizedAuthType === "oauth" && password_hash !== undefined && password_hash !== null) {
      return res.status(400).json({ error: "password_hash must be null for oauth auth_type" });
    }

    const rows = await sql`
      INSERT INTO "TENA_Admin".users (email, password_hash, auth_type, role, is_verified)
      VALUES (${normalizedEmail}, ${password_hash ?? null}, ${normalizedAuthType}, ${normalizedRole}, ${verifiedValue})
      RETURNING id, email, auth_type, role, is_verified, created_at
    `;

    res.status(201).json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// PUT /api/users/:id (body: email?, password_hash?, auth_type?, role?, is_verified?)

router.put("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const { email, password_hash, auth_type, role, is_verified } = req.body;
    const normalizedEmail = email === undefined ? undefined : normalizeEmail(email);
    const normalizedAuthType = auth_type === undefined ? undefined : String(auth_type).trim().toLowerCase();
    const normalizedRole = role === undefined ? undefined : String(role).trim().toLowerCase();

    if (email !== undefined && typeof email !== "string") {
      return res.status(400).json({ error: "email must be a string" });
    }
    if (normalizedAuthType !== undefined && !VALID_AUTH_TYPES.has(normalizedAuthType)) {
      return res.status(400).json({ error: "auth_type must be one of: local, oauth" });
    }
    if (role !== undefined && !VALID_ROLES.has(normalizedRole)) {
      return res.status(400).json({ error: "role must be one of: pending, user, admin, denied" });
    }
    if (auth_type !== undefined && typeof auth_type !== "string") {
      return res.status(400).json({ error: "auth_type must be a string" });
    }
    if (role !== undefined && typeof role !== "string") {
      return res.status(400).json({ error: "role must be a string" });
    }
    if (is_verified !== undefined && typeof is_verified !== "boolean") {
      return res.status(400).json({ error: "is_verified must be a boolean" });
    }

    const currentRows = await sql`
      SELECT auth_type, password_hash
      FROM "TENA_Admin".users
      WHERE id = ${id}
      LIMIT 1
    `;

    if (currentRows.length === 0) {
      return res.status(404).json({ error: "User Not Found" });
    }

    const effectiveAuthType = normalizedAuthType ?? currentRows[0].auth_type;
    const effectivePasswordHash = password_hash === undefined ? currentRows[0].password_hash : password_hash;

    if (effectiveAuthType === "local" && (!effectivePasswordHash || typeof effectivePasswordHash !== "string")) {
      return res.status(400).json({ error: "password_hash is required when auth_type is local" });
    }
    if (effectiveAuthType === "oauth" && effectivePasswordHash !== null) {
      return res.status(400).json({ error: "password_hash must be null when auth_type is oauth" });
    }

    const rows = await sql`
      UPDATE "TENA_Admin".users
      SET
        email = COALESCE(${normalizedEmail ?? null}, email),
        password_hash = COALESCE(${password_hash ?? null}, password_hash),
        auth_type = COALESCE(${normalizedAuthType ?? null}, auth_type),
        role = COALESCE(${normalizedRole ?? null}, role),
        is_verified = COALESCE(${is_verified ?? null}, is_verified)
      WHERE id = ${id}
      RETURNING id, email, auth_type, role, is_verified, created_at
    `;

    if (rows.length === 0) return res.status(404).json({ error: "User Not Found" });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/users/:id

router.delete("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const rows = await sql`
      DELETE FROM "TENA_Admin".users
      WHERE id = ${id}
      RETURNING id
    `;

    if (rows.length === 0) return res.status(404).json({ error: "User Not Found" });
    res.json({ deleted: rows[0].id });
  } catch (err) {
    next(err);
  }
});

export default router;