import { Router } from "express";
import { sql } from "../db/index.js";

const router = Router();

function isInternRole(role) {
  const normalizedRole = String(role ?? "").toLowerCase();
  return /\bintern\b/.test(normalizedRole);
}

function makeId(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// GET /api/cohorts
router.get("/", async (req, res, next) => {
  try {
    const rows = await sql`
      SELECT id, first_name, last_name, role, cohort
      FROM "TENA_Admin".team_members
      WHERE cohort IS NOT NULL AND TRIM(cohort) <> ''
      ORDER BY id ASC
    `;

    const cohortsByName = new Map();

    for (const row of rows) {
      const title = String(row.cohort ?? "").trim();
      if (!title) continue;

      if (!cohortsByName.has(title)) {
        cohortsByName.set(title, {
          id: makeId(title),
          title,
          enrollment: 0,
          status: "In Progress",
          name: "Program TBD",
          participants: [],
          members: {
            coordinator: "N/A",
            staff: []
          }
        });
      }

      const cohort = cohortsByName.get(title);
      const fullName = `${String(row.first_name ?? "").trim()} ${String(row.last_name ?? "").trim()}`.trim() || "Unknown Member";
      const role = String(row.role ?? "").trim() || "Team Member";

      if (isInternRole(role)) {
        cohort.enrollment += 1;
        const slug = fullName.toLowerCase().replace(/[^a-z0-9]+/g, ".");
        cohort.participants.push({
          name: fullName,
          email: `${slug || "participant"}@example.com`
        });
      } else {
        if (/coordinator/i.test(role) && cohort.members.coordinator === "N/A") {
          cohort.members.coordinator = fullName;
        }
        cohort.members.staff.push({ name: fullName, position: role });
      }
    }

    const cohorts = Array.from(cohortsByName.values()).sort((a, b) => a.title.localeCompare(b.title));
    res.json(cohorts);
  } catch (err) {
    next(err);
  }
});

export default router;
