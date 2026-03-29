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
      SELECT
        c.id,
        c.year,
        c.term,
        c.term_order,
        c.name,
        COUNT(DISTINCT tm.id) FILTER (WHERE LOWER(mt.name) = 'intern')::INT AS enrollment
      FROM "TENA_Admin".cohorts c
      LEFT JOIN "TENA_Admin".team_members tm
        ON tm.cohort_id = c.id
      LEFT JOIN "TENA_Admin".team_member_types tmt
        ON tmt.team_member_id = tm.id
      LEFT JOIN "TENA_Admin".member_types mt
        ON mt.id = tmt.member_type_id
      GROUP BY c.id, c.year, c.term, c.term_order, c.name
      ORDER BY c.year DESC, c.term_order ASC, c.id ASC
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

    const cohorts = rows.map((row) => {
      const title =
        String(row.name ?? "").trim() ||
        `${String(row.year ?? "").trim()} ${String(row.term ?? "").trim()} Cohort`.trim();

      return {
        id: row.id,
        title,
        year: row.year,
        term: row.term,
        term_order: row.term_order,
        name: row.name,
        enrollment: Number(row.enrollment ?? 0),
        status: "In Progress",
        participants: [],
        members: {
          coordinator: "N/A",
          staff: []
        }
      };
    });

    res.json(cohorts);
  } catch (err) {
    next(err);
  }
});

export default router;

