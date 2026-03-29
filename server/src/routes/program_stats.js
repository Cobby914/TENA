import { Router } from "express";
import { sql } from "../db/index.js";
import { verifyAuth, requireApproved, requireRole } from "../middleware/auth.js";

const router = Router();
const adminOnly = [verifyAuth, requireApproved, requireRole("admin")];

// GET /api/program_stats

router.get("/", async (req, res, next) => {
  try {
    const programId = req.query.program_id ? Number(req.query.program_id) : null;

    if (programId !== null) {
      if (!Number.isInteger(programId) || programId < 1) {
        return res.status(400).json({ error: "Invalid program_id" });
      }

      const rows = await sql`
        SELECT id, program_id, label, value, description
        FROM "TENA_Admin".program_stats
        WHERE program_id = ${programId}
        ORDER BY id ASC
      `;
      return res.json(rows);
    }

    const rows = await sql`
      SELECT id, program_id, label, value, description
      FROM "TENA_Admin".program_stats
      ORDER BY id ASC
    `;
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

// GET /api/program_stats/:id

router.get("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const rows = await sql`
      SELECT id, program_id, label, value, description
      FROM "TENA_Admin".program_stats
      WHERE id = ${id}
    `;

    if (rows.length === 0) {
      return res.status(404).json({ error: "Program Stat Not Found" });
    }
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// POST /api/program_stats (body: program_id, label, value, description?)

router.post("/", ...adminOnly, async (req, res, next) => {
  try {
    const { program_id, label, value, description } = req.body;

    if (!program_id || !Number.isInteger(Number(program_id))) {
      return res.status(400).json({ error: "program_id is required (integer value)" });
    }
    if (!label || typeof label !== "string") {
      return res.status(400).json({ error: "label is required (string value)" });
    }
    if (!value || typeof value !== "string") {
      return res.status(400).json({ error: "value is required (string value)" });
    }

    const rows = await sql`
      INSERT INTO "TENA_Admin".program_stats (program_id, label, value, description)
      VALUES (${program_id}, ${label}, ${value}, ${description ?? null})
      RETURNING id, program_id, label, value, description
    `;

    res.status(201).json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// PUT /api/program_stats/:id (body: program_id?, label?, value?, description?)

router.put("/:id", ...adminOnly, async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const { program_id, label, value, description } = req.body;

    if (program_id !== undefined && !Number.isInteger(Number(program_id))) {
      return res.status(400).json({ error: "program_id must be an integer" });
    }
    if (label !== undefined && typeof label !== "string") {
      return res.status(400).json({ error: "label must be a string" });
    }
    if (value !== undefined && typeof value !== "string") {
      return res.status(400).json({ error: "value must be a string" });
    }

    const rows = await sql`
      UPDATE "TENA_Admin".program_stats
      SET
        program_id = COALESCE(${program_id ?? null}, program_id),
        label = COALESCE(${label ?? null}, label),
        value = COALESCE(${value ?? null}, value),
        description = COALESCE(${description ?? null}, description)
      WHERE id = ${id}
      RETURNING id, program_id, label, value, description
    `;

    if (rows.length === 0) return res.status(404).json({ error: "Program Stat Not Found" });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/program_stats/:id

router.delete("/:id", ...adminOnly, async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const rows = await sql`
      DELETE FROM "TENA_Admin".program_stats
      WHERE id = ${id}
      RETURNING id
    `;

    if (rows.length === 0) return res.status(404).json({ error: "Program Stat Not Found" });
    res.json({ deleted: rows[0].id });
  } catch (err) {
    next(err);
  }
});

export default router;