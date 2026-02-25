import { Router } from "express";
import { sql } from "../db/index.js";

const router = Router();

// GET /api/team_members
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

// GET /api/team_members/:id
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

export default router;
