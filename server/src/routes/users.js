import { Router } from "express";
import { sql } from "../db/index.js";
import { verifyAuth } from "../middleware/auth.js";

const router = Router();

router.use(verifyAuth);

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

    const rows = await sql`
      INSERT INTO "TENA_Admin".users (email, password_hash, auth_type, role, is_verified)
      VALUES (${email}, ${password_hash ?? null}, ${auth_type}, ${role ?? null}, ${is_verified ?? null})
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

    if (email !== undefined && typeof email !== "string") {
      return res.status(400).json({ error: "email must be a string" });
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

    const rows = await sql`
      UPDATE "TENA_Admin".users
      SET
        email = COALESCE(${email ?? null}, email),
        password_hash = COALESCE(${password_hash ?? null}, password_hash),
        auth_type = COALESCE(${auth_type ?? null}, auth_type),
        role = COALESCE(${role ?? null}, role),
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