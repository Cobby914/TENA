import { Router } from "express";
import { sql } from "../db/index.js";
import { verifyAuth, requireApproved, requireRole } from "../middleware/auth.js";

const router = Router();
const adminOnly = [verifyAuth, requireApproved, requireRole("admin")];


// GET /api/team_members
router.get("/", async (req, res, next) => {
  try {
    const rows = await sql`
      SELECT 
        t.id,
        t.first_name,
        t.last_name,
        t.role,
        t.member_type,
        t.bio,
        t.profile_image_key,
        t.display_order,
        t.linkedin_link,
        t.created_at,
        t.cohort_id,
        c.name AS cohort_name,
        c.year,
        c.term
      FROM "TENA_Admin".team_members t
      LEFT JOIN "TENA_Admin".cohorts c
        ON t.cohort_id = c.id
      ORDER BY t.display_order NULLS LAST, t.id ASC
    `;
    res.json(rows);
  } catch (err) {
    next(err);
  }
});


// GET /api/team_members/:id
router.get("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const rows = await sql`
      SELECT 
        t.id,
        t.first_name,
        t.last_name,
        t.role,
        t.member_type,
        t.bio,
        t.profile_image_key,
        t.display_order,
        t.linkedin_link,
        t.created_at,
        t.cohort_id,
        c.name AS cohort_name,
        c.year,
        c.term
      FROM "TENA_Admin".team_members t
      LEFT JOIN "TENA_Admin".cohorts c
        ON t.cohort_id = c.id
      WHERE t.id = ${id}
    `;

    if (rows.length === 0) {
      return res.status(404).json({ error: "Team Member Not Found" });
    }

    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});


// POST /api/team_members
router.post("/", async (req, res, next) => {
  try {
    const {
      first_name,
      last_name,
      role,
      member_type,
      bio,
      profile_image_key,
      display_order,
      linkedin_link,
      cohort_id
    } = req.body;

    if (!first_name || typeof first_name !== "string") {
      return res.status(400).json({ error: "first_name is required" });
    }

    if (!last_name || typeof last_name !== "string") {
      return res.status(400).json({ error: "last_name is required" });
    }

    if (!member_type || !["board", "cohort_member"].includes(member_type)) {
      return res.status(400).json({ error: "Invalid member_type" });
    }

    const rows = await sql`
      INSERT INTO "TENA_Admin".team_members (
        first_name,
        last_name,
        role,
        member_type,
        bio,
        profile_image_key,
        display_order,
        linkedin_link,
        cohort_id
      )
      VALUES (
        ${first_name},
        ${last_name},
        ${role ?? null},
        ${member_type},
        ${bio ?? null},
        ${profile_image_key ?? null},
        ${display_order ?? null},
        ${linkedin_link ?? null},
        ${cohort_id ?? null}
      )
      RETURNING *
    `;

    res.status(201).json(rows[0]);
  } catch (err) {
    next(err);
  }
});


// PUT /api/team_members/:id
router.put("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const {
      first_name,
      last_name,
      role,
      member_type,
      bio,
      profile_image_key,
      display_order,
      linkedin_link,
      cohort_id
    } = req.body;

    const rows = await sql`
      UPDATE "TENA_Admin".team_members
      SET
        first_name = COALESCE(${first_name ?? null}, first_name),
        last_name = COALESCE(${last_name ?? null}, last_name),
        role = COALESCE(${role ?? null}, role),
        member_type = COALESCE(${member_type ?? null}, member_type),
        bio = COALESCE(${bio ?? null}, bio),
        profile_image_key = COALESCE(${profile_image_key ?? null}, profile_image_key),
        display_order = COALESCE(${display_order ?? null}, display_order),
        linkedin_link = COALESCE(${linkedin_link ?? null}, linkedin_link),
        cohort_id = COALESCE(${cohort_id ?? null}, cohort_id)
      WHERE id = ${id}
      RETURNING *
    `;

    if (rows.length === 0) {
      return res.status(404).json({ error: "Team Member Not Found" });
    }

    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});


// DELETE /api/team_members/:id
router.delete("/:id", async (req, res, next) => {
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

    if (rows.length === 0) {
      return res.status(404).json({ error: "Team Member Not Found" });
    }

    res.json({ deleted: rows[0].id });
  } catch (err) {
    next(err);
  }
});

export default router;