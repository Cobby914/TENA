import { Router } from "express";
import { sql } from "../db/index.js";
import {
  verifyAuth,
  requireApproved,
  requireRole,
} from "../middleware/auth.js";

const router = Router();
const adminOnly = [verifyAuth, requireApproved, requireRole("admin")];

function toId(value) {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : null;
}

function normalizeName(value) {
  return typeof value === "string" ? value.trim().toLowerCase() : "";
}

// GET /api/member_types
router.get("/", async (req, res, next) => {
  try {
    const rows = await sql`
      SELECT id, name
      FROM "TENA_Admin".member_types
      ORDER BY id ASC
    `;
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

// GET /api/member_types/:id
router.get("/:id", async (req, res, next) => {
  try {
    const id = toId(req.params.id);
    if (!id) return res.status(400).json({ error: "Invalid ID" });

    const rows = await sql`
      SELECT id, name
      FROM "TENA_Admin".member_types
      WHERE id = ${id}
    `;

    if (rows.length === 0)
      return res.status(404).json({ error: "Member Type Not Found" });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// POST /api/member_types
router.post("/", async (req, res, next) => {
  try {
    const name = normalizeName(req.body.name);
    if (!name) {
      return res.status(400).json({ error: "name is required (string value)" });
    }

    const existing = await sql`
      SELECT id
      FROM "TENA_Admin".member_types
      WHERE LOWER(name) = ${name}
      LIMIT 1
    `;

    if (existing.length > 0) {
      return res.status(409).json({ error: "Member type already exists" });
    }

    const rows = await sql`
      INSERT INTO "TENA_Admin".member_types (name)
      VALUES (${name})
      RETURNING id, name
    `;

    res.status(201).json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// PUT /api/member_types/:id
router.put("/:id", async (req, res, next) => {
  try {
    const id = toId(req.params.id);
    if (!id) return res.status(400).json({ error: "Invalid ID" });

    const name = normalizeName(req.body.name);
    if (!name) {
      return res.status(400).json({ error: "name is required (string value)" });
    }

    const existing = await sql`
      SELECT id
      FROM "TENA_Admin".member_types
      WHERE LOWER(name) = ${name}
        AND id <> ${id}
      LIMIT 1
    `;

    if (existing.length > 0) {
      return res.status(409).json({ error: "Member type already exists" });
    }

    const rows = await sql`
      UPDATE "TENA_Admin".member_types
      SET name = ${name}
      WHERE id = ${id}
      RETURNING id, name
    `;

    if (rows.length === 0)
      return res.status(404).json({ error: "Member Type Not Found" });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/member_types/:id
router.delete("/:id", async (req, res, next) => {
  try {
    const id = toId(req.params.id);
    if (!id) return res.status(400).json({ error: "Invalid ID" });

    const rows = await sql`
      DELETE FROM "TENA_Admin".member_types
      WHERE id = ${id}
      RETURNING id
    `;

    if (rows.length === 0)
      return res.status(404).json({ error: "Member Type Not Found" });
    res.json({ deleted: rows[0].id });
  } catch (err) {
    next(err);
  }
});

export default router;
