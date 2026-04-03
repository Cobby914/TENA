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
        c.profile_picture,
        COUNT(DISTINCT tm.id) FILTER (WHERE LOWER(mt.name) = 'intern')::INT AS enrollment
      FROM "TENA_Admin".cohorts c
      LEFT JOIN "TENA_Admin".team_members tm
        ON tm.cohort_id = c.id
      LEFT JOIN "TENA_Admin".team_member_types tmt
        ON tmt.team_member_id = tm.id
      LEFT JOIN "TENA_Admin".member_types mt
        ON mt.id = tmt.member_type_id
      GROUP BY c.id, c.year, c.term, c.term_order, c.name, c.profile_picture
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
      SELECT id, year, term, term_order, name, profile_picture, created_at
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

// POST /api/cohorts (body: year, term, term_order, name?, profile_picture?)
router.post("/", ...adminOnly, async (req, res, next) => {
  try {
    const { year, term, term_order, name } = req.body;
    const profilePicture =
      req.body.profile_picture === undefined ? false : req.body.profile_picture;

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
    if (typeof profilePicture !== "boolean") {
      return res
        .status(400)
        .json({ error: "profile_picture must be a boolean" });
    }

    const rows = await sql`
      INSERT INTO "TENA_Admin".cohorts (year, term, term_order, name, profile_picture)
      VALUES (${year}, ${term}, ${term_order}, ${name ?? null}, ${profilePicture})
      RETURNING id, year, term, term_order, name, profile_picture, created_at
    `;

    res.status(201).json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// PUT /api/cohorts/:id (body: year?, term?, term_order?, name?, profile_picture?)
router.put("/:id", ...adminOnly, async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const existingRows = await sql`
      SELECT id, year, term, term_order, name, profile_picture, created_at
      FROM "TENA_Admin".cohorts
      WHERE id = ${id}
    `;

    if (existingRows.length === 0) {
      return res.status(404).json({ error: "Cohort Not Found" });
    }

    const existing = existingRows[0];
    const has = (k) => Object.prototype.hasOwnProperty.call(req.body, k);

    const year = has("year") ? Number(req.body.year) : existing.year;
    const term = has("term") ? String(req.body.term ?? "").trim() : existing.term;
    const term_order = has("term_order")
      ? Number(req.body.term_order)
      : existing.term_order;
    const name = has("name")
      ? req.body.name === null || req.body.name === ""
        ? null
        : String(req.body.name).trim()
      : existing.name;
    const profilePicture = has("profile_picture")
      ? req.body.profile_picture
      : existing.profile_picture;

    if (!Number.isInteger(Number(year))) {
      return res.status(400).json({ error: "year must be an integer" });
    }
    if (!term) {
      return res.status(400).json({ error: "term must be a non-empty string" });
    }
    if (!Number.isInteger(Number(term_order))) {
      return res.status(400).json({ error: "term_order must be an integer" });
    }
    if (typeof profilePicture !== "boolean") {
      return res
        .status(400)
        .json({ error: "profile_picture must be a boolean" });
    }

    const updated = await sql`
      UPDATE "TENA_Admin".cohorts
      SET
        year = ${year},
        term = ${term},
        term_order = ${term_order},
        name = ${name},
        profile_picture = ${profilePicture}
      WHERE id = ${id}
      RETURNING id, year, term, term_order, name, profile_picture, created_at
    `;

    res.json(updated[0]);
  } catch (err) {
    next(err);
  }
});

export default router;
