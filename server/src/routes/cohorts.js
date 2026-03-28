import { Router } from "express";
import { sql } from "../db/index.js";
import {
  verifyAuth,
  requireApproved,
  requireRole,
} from "../middleware/auth.js";

const router = Router();
const adminOnly = [verifyAuth, requireApproved, requireRole("admin")];

// GET /api/cohorts
router.get("/", async (req, res, next) => {
  try {
    const rows = await sql`
      SELECT id, year, term, term_order, name, created_at
      FROM "TENA_Admin".cohorts
      ORDER BY id ASC
    `;
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

// GET /api/cohorts/:id
router.get("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const rows = await sql`
      SELECT id, year, term, term_order, name, created_at
      FROM "TENA_Admin".cohorts
      WHERE id = ${id}
    `;

    if (rows.length === 0) {
      return res.status(404).json({ error: "Cohort Not Found" });
    }
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// POST /api/cohorts (body: year, term, term_order, name?)
router.post("/", async (req, res, next) => {
  try {
    const { year, term, term_order, name } = req.body;

    if (!Number.isInteger(Number(year))) {
      return res
        .status(400)
        .json({ error: "year is required (integer value)" });
    }
    if (!term || typeof term !== "string") {
      return res.status(400).json({ error: "term is required (string value)" });
    }
    if (!Number.isInteger(Number(term_order))) {
      return res
        .status(400)
        .json({ error: "term_order is required (integer value)" });
    }
    if (name !== undefined && name !== null && typeof name !== "string") {
      return res.status(400).json({ error: "name must be a string" });
    }

    const rows = await sql`
      INSERT INTO "TENA_Admin".cohorts (year, term, term_order, name)
      VALUES (${year}, ${term}, ${term_order}, ${name ?? null})
      RETURNING id, year, term, term_order, name, created_at
    `;

    res.status(201).json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// PUT /api/cohorts/:id (body: year?, term?, term_order?, name?)
router.put("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const { year, term, term_order, name } = req.body;

    if (year !== undefined && !Number.isInteger(Number(year))) {
      return res.status(400).json({ error: "year must be an integer" });
    }
    if (term !== undefined && typeof term !== "string") {
      return res.status(400).json({ error: "term must be a string" });
    }
    if (term_order !== undefined && !Number.isInteger(Number(term_order))) {
      return res.status(400).json({ error: "term_order must be an integer" });
    }
    if (name !== undefined && name !== null && typeof name !== "string") {
      return res.status(400).json({ error: "name must be a string" });
    }

    const rows = await sql`
      UPDATE "TENA_Admin".cohorts
      SET
        year = COALESCE(${year ?? null}, year),
        term = COALESCE(${term ?? null}, term),
        term_order = COALESCE(${term_order ?? null}, term_order),
        name = COALESCE(${name ?? null}, name)
      WHERE id = ${id}
      RETURNING id, year, term, term_order, name, created_at
    `;

    if (rows.length === 0)
      return res.status(404).json({ error: "Cohort Not Found" });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/cohorts/:id
router.delete("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const rows = await sql`
      DELETE FROM "TENA_Admin".cohorts
      WHERE id = ${id}
      RETURNING id
    `;

    if (rows.length === 0)
      return res.status(404).json({ error: "Cohort Not Found" });
    res.json({ deleted: rows[0].id });
  } catch (err) {
    next(err);
  }
});

export default router;
