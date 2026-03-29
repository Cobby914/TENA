import { Router } from "express";
import { sql } from "../db/index.js";

const router = Router();

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

