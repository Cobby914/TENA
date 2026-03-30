import { Router } from "express";
import { sql } from "../db/index.js";
import {
  assertMemberMayHaveCohort,
} from "../lib/internCohort.js";
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

function toOptionalId(value) {
  if (value === undefined || value === null || value === "") return null;
  return toId(value);
}

function normalizeText(value) {
  return typeof value === "string" ? value.trim() : "";
}

async function fetchMemberById(id) {
  const rows = await sql`
    SELECT
      tm.id,
      tm.first_name,
      tm.last_name,
      tm.role,
      tm.bio,
      tm.profile_image_key,
      tm.profile_image_key AS image_key,
      tm.created_at,
      tm.display_order,
      tm.linkedin_link,
      tm.cohort_id,
      c.year AS cohort_year,
      c.term AS cohort_term,
      c.term_order AS cohort_term_order,
      c.name AS cohort_name,
      COALESCE(
        ARRAY_AGG(DISTINCT mt.name ORDER BY mt.name) FILTER (WHERE mt.name IS NOT NULL),
        ARRAY[]::VARCHAR[]
      ) AS member_types
    FROM "TENA_Admin".team_members tm
    LEFT JOIN "TENA_Admin".cohorts c
      ON c.id = tm.cohort_id
    LEFT JOIN "TENA_Admin".team_member_types tmt
      ON tmt.team_member_id = tm.id
    LEFT JOIN "TENA_Admin".member_types mt
      ON mt.id = tmt.member_type_id
    WHERE tm.id = ${id}
    GROUP BY
      tm.id, tm.first_name, tm.last_name, tm.role, tm.bio, tm.profile_image_key,
      tm.created_at, tm.display_order, tm.linkedin_link, tm.cohort_id,
      c.year, c.term, c.term_order, c.name
  `;

  return rows[0] ?? null;
}

// GET /api/team_members
router.get("/", async (req, res, next) => {
  try {
    const rows = await sql`
      SELECT
        tm.id,
        tm.first_name,
        tm.last_name,
        tm.role,
        tm.bio,
        tm.profile_image_key,
        tm.profile_image_key AS image_key,
        tm.created_at,
        tm.display_order,
        tm.linkedin_link,
        tm.cohort_id,
        c.year AS cohort_year,
        c.term AS cohort_term,
        c.term_order AS cohort_term_order,
        c.name AS cohort_name,
        COALESCE(
          ARRAY_AGG(DISTINCT mt.name ORDER BY mt.name) FILTER (WHERE mt.name IS NOT NULL),
          ARRAY[]::VARCHAR[]
        ) AS member_types
      FROM "TENA_Admin".team_members tm
      LEFT JOIN "TENA_Admin".cohorts c
        ON c.id = tm.cohort_id
      LEFT JOIN "TENA_Admin".team_member_types tmt
        ON tmt.team_member_id = tm.id
      LEFT JOIN "TENA_Admin".member_types mt
        ON mt.id = tmt.member_type_id
      GROUP BY
        tm.id, tm.first_name, tm.last_name, tm.role, tm.bio, tm.profile_image_key,
        tm.created_at, tm.display_order, tm.linkedin_link, tm.cohort_id,
        c.year, c.term, c.term_order, c.name
      ORDER BY COALESCE(tm.display_order, 999999), tm.id ASC
    `;
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

// GET /api/team_members/by-type/:typeName
router.get("/by-type/:typeName", async (req, res, next) => {
  try {
    const typeName = normalizeText(req.params.typeName).toLowerCase();
    if (!typeName) {
      return res.status(400).json({ error: "typeName is required" });
    }

    const rows = await sql`
      SELECT
        tm.id,
        tm.first_name,
        tm.last_name,
        tm.role,
        tm.bio,
        tm.profile_image_key,
        tm.profile_image_key AS image_key,
        tm.created_at,
        tm.display_order,
        tm.linkedin_link,
        tm.cohort_id,
        c.year AS cohort_year,
        c.term AS cohort_term,
        c.term_order AS cohort_term_order,
        c.name AS cohort_name,
        COALESCE(
          ARRAY_AGG(DISTINCT mt_all.name ORDER BY mt_all.name) FILTER (WHERE mt_all.name IS NOT NULL),
          ARRAY[]::VARCHAR[]
        ) AS member_types
      FROM "TENA_Admin".team_members tm
      LEFT JOIN "TENA_Admin".cohorts c
        ON c.id = tm.cohort_id
      LEFT JOIN "TENA_Admin".team_member_types tmt_all
        ON tmt_all.team_member_id = tm.id
      LEFT JOIN "TENA_Admin".member_types mt_all
        ON mt_all.id = tmt_all.member_type_id
      WHERE EXISTS (
        SELECT 1
        FROM "TENA_Admin".team_member_types tmt_filter
        JOIN "TENA_Admin".member_types mt_filter
          ON mt_filter.id = tmt_filter.member_type_id
        WHERE tmt_filter.team_member_id = tm.id
          AND LOWER(mt_filter.name) = ${typeName}
      )
      GROUP BY
        tm.id, tm.first_name, tm.last_name, tm.role, tm.bio, tm.profile_image_key,
        tm.created_at, tm.display_order, tm.linkedin_link, tm.cohort_id,
        c.year, c.term, c.term_order, c.name
      ORDER BY COALESCE(tm.display_order, 999999), tm.id ASC
    `;

    res.json(rows);
  } catch (err) {
    next(err);
  }
});

// GET /api/team_members/:id
router.get("/:id", async (req, res, next) => {
  try {
    const id = toId(req.params.id);
    if (!id) return res.status(400).json({ error: "Invalid ID" });

    const member = await fetchMemberById(id);
    if (!member)
      return res.status(404).json({ error: "Team Member Not Found" });

    res.json(member);
  } catch (err) {
    next(err);
  }
});

// POST /api/team_members
router.post("/", async (req, res, next) => {
  try {
    const firstName = normalizeText(req.body.first_name);
    const lastName = normalizeText(req.body.last_name);

    if (!firstName) {
      return res
        .status(400)
        .json({ error: "first_name is required (string value)" });
    }
    if (!lastName) {
      return res
        .status(400)
        .json({ error: "last_name is required (string value)" });
    }

    const role = normalizeText(req.body.role) || null;
    const bio = normalizeText(req.body.bio) || null;
    const profileImageKey =
      normalizeText(req.body.profile_image_key ?? req.body.image_key) || null;
    const linkedinLink = normalizeText(req.body.linkedin_link) || null;
    const displayOrder =
      req.body.display_order === undefined ||
      req.body.display_order === null ||
      req.body.display_order === ""
        ? null
        : Number(req.body.display_order);
    const cohortId = toOptionalId(req.body.cohort_id);
    if (displayOrder !== null && !Number.isInteger(displayOrder)) {
      return res
        .status(400)
        .json({ error: "display_order must be an integer" });
    }
    if (
      req.body.cohort_id !== undefined &&
      req.body.cohort_id !== null &&
      cohortId === null
    ) {
      return res
        .status(400)
        .json({ error: "cohort_id must be a positive integer" });
    }

    if (cohortId !== null) {
      return res.status(400).json({
        error:
          "cohort_id cannot be set on create. Create the member, assign the intern member type, then update with cohort_id.",
      });
    }

    const inserted = await sql`
      INSERT INTO "TENA_Admin".team_members
      (first_name, last_name, role, bio, profile_image_key, display_order, linkedin_link, cohort_id)
      VALUES (${firstName}, ${lastName}, ${role}, ${bio}, ${profileImageKey}, ${displayOrder}, ${linkedinLink}, NULL)
      RETURNING id
    `;

    const member = await fetchMemberById(inserted[0].id);
    res.status(201).json(member);
  } catch (err) {
    next(err);
  }
});

// PUT /api/team_members/:id
router.put("/:id", async (req, res, next) => {
  try {
    const id = toId(req.params.id);
    if (!id) return res.status(400).json({ error: "Invalid ID" });

    if (
      req.body.first_name !== undefined &&
      typeof req.body.first_name !== "string"
    ) {
      return res.status(400).json({ error: "first_name must be a string" });
    }
    if (
      req.body.last_name !== undefined &&
      typeof req.body.last_name !== "string"
    ) {
      return res.status(400).json({ error: "last_name must be a string" });
    }
    if (
      req.body.display_order !== undefined &&
      req.body.display_order !== null &&
      req.body.display_order !== "" &&
      !Number.isInteger(Number(req.body.display_order))
    ) {
      return res
        .status(400)
        .json({ error: "display_order must be an integer" });
    }

    const cohortId = toOptionalId(req.body.cohort_id);
    if (
      req.body.cohort_id !== undefined &&
      req.body.cohort_id !== null &&
      cohortId === null
    ) {
      return res
        .status(400)
        .json({ error: "cohort_id must be a positive integer" });
    }

    const firstName =
      req.body.first_name === undefined
        ? null
        : normalizeText(req.body.first_name);
    const lastName =
      req.body.last_name === undefined
        ? null
        : normalizeText(req.body.last_name);
    const role =
      req.body.role === undefined ? null : normalizeText(req.body.role);
    const bio = req.body.bio === undefined ? null : normalizeText(req.body.bio);
    const profileImageKey =
      req.body.profile_image_key === undefined &&
      req.body.image_key === undefined
        ? null
        : normalizeText(req.body.profile_image_key ?? req.body.image_key);
    const linkedinLink =
      req.body.linkedin_link === undefined
        ? null
        : normalizeText(req.body.linkedin_link);
    const displayOrder =
      req.body.display_order === undefined ||
      req.body.display_order === null ||
      req.body.display_order === ""
        ? null
        : Number(req.body.display_order);
    const hasDisplayOrder = Object.prototype.hasOwnProperty.call(
      req.body,
      "display_order",
    );
    const hasCohortId = Object.prototype.hasOwnProperty.call(
      req.body,
      "cohort_id",
    );

    if (hasCohortId && cohortId !== null) {
      try {
        await assertMemberMayHaveCohort(id, cohortId);
      } catch (e) {
        if (e.statusCode === 400) {
          return res.status(400).json({ error: e.message });
        }
        throw e;
      }
    }

    const rows = await sql`
      UPDATE "TENA_Admin".team_members
      SET
        first_name = COALESCE(${firstName}, first_name),
        last_name = COALESCE(${lastName}, last_name),
        role = COALESCE(${role}, role),
        bio = COALESCE(${bio}, bio),
        profile_image_key = COALESCE(${profileImageKey}, profile_image_key),
        display_order = CASE WHEN ${hasDisplayOrder} THEN ${displayOrder} ELSE display_order END,
        linkedin_link = COALESCE(${linkedinLink}, linkedin_link),
        cohort_id = CASE WHEN ${hasCohortId} THEN ${cohortId} ELSE cohort_id END
      WHERE id = ${id}
      RETURNING id
    `;

    if (rows.length === 0)
      return res.status(404).json({ error: "Team Member Not Found" });

    const member = await fetchMemberById(id);
    res.json(member);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/team_members/:id
router.delete("/:id", async (req, res, next) => {
  try {
    const id = toId(req.params.id);
    if (!id) return res.status(400).json({ error: "Invalid ID" });

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