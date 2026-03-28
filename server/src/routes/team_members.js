import { Router } from "express";
import { sql } from "../db/index.js";
import {
  verifyAuth,
  requireApproved,
  requireRole,
} from "../middleware/auth.js";

const router = Router();
const adminOnly = [verifyAuth, requireApproved, requireRole("admin")];

//GET /api/team_members
router.get("/", async (req, res, next) => {
  try {
    const rows = await sql`
      SELECT id, first_name, last_name, role, bio, image_key, created_at, cohort
      FROM "TENA_Admin".team_members
      ORDER BY id ASC
    `;
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

//GET /api/team_members/:id
router.get("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const rows = await sql`
      SELECT id, first_name, last_name, role, bio, image_key, created_at, cohort
      FROM "TENA_Admin".team_members
      WHERE id = ${id}
    `;

    if (rows.length === 0) {
      return res.status(404).json({ error: "Team Member Not Found" });
    }
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});

//POST /api/team_members (body: first_name, last_name, role?, bio?, image_key?, cohort?)
router.post("/", ...adminOnly, async (req, res, next) => {
  try {
    const { first_name, last_name, role, bio, image_key, cohort } = req.body;

    if (!first_name || typeof first_name !== "string") {
      return res
        .status(400)
        .json({ error: "first_name is required (string value)" });
    }
    if (!last_name || typeof last_name !== "string") {
      return res
        .status(400)
        .json({ error: "last_name is required (string value)" });
    }

    const rows = await sql`
      INSERT INTO "TENA_Admin".team_members (first_name, last_name, role, bio, image_key, cohort)
      VALUES (${first_name}, ${last_name}, ${role ?? null}, ${bio ?? null}, ${image_key ?? null}, ${cohort ?? null})
      RETURNING id, first_name, last_name, role, bio, image_key, created_at, cohort
    `;

    res.status(201).json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// PUT /api/team_members/:id (body: first_name?, last_name?, role?, bio?, image_key?)
router.put("/:id", ...adminOnly, async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const { first_name, last_name, role, bio, image_key, cohort } = req.body;

    if (first_name !== undefined && typeof first_name !== "string") {
      return res.status(400).json({ error: "first_name must be a string" });
    }
    if (last_name !== undefined && typeof last_name !== "string") {
      return res.status(400).json({ error: "last_name must be a string" });
    }

    const rows = await sql`
      UPDATE "TENA_Admin".team_members
      SET
        first_name = COALESCE(${first_name ?? null}, first_name),
        last_name = COALESCE(${last_name ?? null}, last_name),
        role = COALESCE(${role ?? null}, role),
        bio = COALESCE(${bio ?? null}, bio),
        image_key = COALESCE(${image_key ?? null}, image_key),
        cohort = COALESCE(${cohort ?? null}, cohort)
      WHERE id = ${id}
      RETURNING id, first_name, last_name, role, bio, image_key, created_at, cohort
    `;

    if (rows.length === 0)
      return res.status(404).json({ error: "Team Member Not Found" });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});

//DELETE /api/team_members/:id
router.delete("/:id", ...adminOnly, async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const rows = await sql`
      DELETE FROM "TENA_Admin".team_members
      WHERE id = ${id}
      RETURNING id
    `;

    if (rows.length === 0)
      return res.status(404).json({ error: "Team Member Not Found" });
    res.json({ deleted: rows[0].id });
  } catch (err) {
    next(err);
  }
});

export default router;
