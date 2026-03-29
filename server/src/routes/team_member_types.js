import { Router } from "express";
import { sql } from "../db/index.js";
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

function readBody(req) {
  return req.body && typeof req.body === "object" ? req.body : {};
}

function handleDbInsertOrUpdateError(err, res, next) {
  // 23505: unique_violation, 23503: foreign_key_violation
  if (err?.code === "23505") {
    return res.status(409).json({ error: "This team_member/member_type pair already exists" });
  }
  if (err?.code === "23503") {
    return res.status(400).json({ error: "Invalid team_member_id or member_type_id" });
  }
  return next(err);
}

async function existsTeamMember(id) {
  const rows = await sql`
    SELECT id
    FROM "TENA_Admin".team_members
    WHERE id = ${id}
    LIMIT 1
  `;
  return rows.length > 0;
}

async function existsMemberType(id) {
  const rows = await sql`
    SELECT id
    FROM "TENA_Admin".member_types
    WHERE id = ${id}
    LIMIT 1
  `;
  return rows.length > 0;
}

async function existsPair(teamMemberId, memberTypeId, excludeId = null) {
  const rows = await sql`
    SELECT id
    FROM "TENA_Admin".team_member_types
    WHERE team_member_id = ${teamMemberId}
      AND member_type_id = ${memberTypeId}
      AND (${excludeId}::INT IS NULL OR id <> ${excludeId})
    LIMIT 1
  `;
  return rows.length > 0;
}

async function fetchTeamMemberTypeById(id) {
  const rows = await sql`
    SELECT
      tmt.id,
      tmt.team_member_id,
      tmt.member_type_id,
      mt.name AS member_type_name,
      tm.first_name,
      tm.last_name
    FROM "TENA_Admin".team_member_types tmt
    LEFT JOIN "TENA_Admin".member_types mt
      ON mt.id = tmt.member_type_id
    LEFT JOIN "TENA_Admin".team_members tm
      ON tm.id = tmt.team_member_id
    WHERE tmt.id = ${id}
  `;

  return rows[0] ?? null;
}

// GET /api/team_member_types
router.get("/", async (req, res, next) => {
  try {
    const teamMemberId =
      req.query.team_member_id === undefined
        ? null
        : toId(req.query.team_member_id);
    const memberTypeId =
      req.query.member_type_id === undefined
        ? null
        : toId(req.query.member_type_id);

    if (req.query.team_member_id !== undefined && !teamMemberId) {
      return res
        .status(400)
        .json({ error: "team_member_id must be a positive integer" });
    }
    if (req.query.member_type_id !== undefined && !memberTypeId) {
      return res
        .status(400)
        .json({ error: "member_type_id must be a positive integer" });
    }

    const rows = await sql`
      SELECT
        tmt.id,
        tmt.team_member_id,
        tmt.member_type_id,
        mt.name AS member_type_name,
        tm.first_name,
        tm.last_name
      FROM "TENA_Admin".team_member_types tmt
      LEFT JOIN "TENA_Admin".member_types mt
        ON mt.id = tmt.member_type_id
      LEFT JOIN "TENA_Admin".team_members tm
        ON tm.id = tmt.team_member_id
      WHERE (${teamMemberId}::INT IS NULL OR tmt.team_member_id = ${teamMemberId})
        AND (${memberTypeId}::INT IS NULL OR tmt.member_type_id = ${memberTypeId})
      ORDER BY tmt.id ASC
    `;

    res.json(rows);
  } catch (err) {
    next(err);
  }
});

// GET /api/team_member_types/:id
router.get("/:id", async (req, res, next) => {
  try {
    const id = toId(req.params.id);
    if (!id) return res.status(400).json({ error: "Invalid ID" });

    const row = await fetchTeamMemberTypeById(id);
    if (!row)
      return res.status(404).json({ error: "Team Member Type Not Found" });

    res.json(row);
  } catch (err) {
    next(err);
  }
});

// POST /api/team_member_types
router.post("/", async (req, res, next) => {
  try {
    const body = readBody(req);
    const teamMemberId = toId(body.team_member_id);
    const memberTypeId = toId(body.member_type_id);

    if (!teamMemberId) {
      return res
        .status(400)
        .json({ error: "team_member_id is required (positive integer)" });
    }
    if (!memberTypeId) {
      return res
        .status(400)
        .json({ error: "member_type_id is required (positive integer)" });
    }
    if (!(await existsTeamMember(teamMemberId))) {
      return res
        .status(404)
        .json({ error: "Referenced team_member_id was not found" });
    }
    if (!(await existsMemberType(memberTypeId))) {
      return res
        .status(404)
        .json({ error: "Referenced member_type_id was not found" });
    }
    if (await existsPair(teamMemberId, memberTypeId)) {
      return res
        .status(409)
        .json({ error: "This team_member/member_type pair already exists" });
    }

    const rows = await sql`
      INSERT INTO "TENA_Admin".team_member_types (team_member_id, member_type_id)
      VALUES (${teamMemberId}, ${memberTypeId})
      RETURNING id
    `;

    const row = await fetchTeamMemberTypeById(rows[0].id);
    res.status(201).json(row);
  } catch (err) {
    return handleDbInsertOrUpdateError(err, res, next);
  }
});

// PUT /api/team_member_types/:id
router.put("/:id", async (req, res, next) => {
  try {
    const id = toId(req.params.id);
    if (!id) return res.status(400).json({ error: "Invalid ID" });

    const existing = await fetchTeamMemberTypeById(id);
    if (!existing)
      return res.status(404).json({ error: "Team Member Type Not Found" });

    const body = readBody(req);
    const teamMemberId =
      body.team_member_id === undefined
        ? existing.team_member_id
        : toId(body.team_member_id);
    const memberTypeId =
      body.member_type_id === undefined
        ? existing.member_type_id
        : toId(body.member_type_id);

    if (!teamMemberId) {
      return res
        .status(400)
        .json({ error: "team_member_id must be a positive integer" });
    }
    if (!memberTypeId) {
      return res
        .status(400)
        .json({ error: "member_type_id must be a positive integer" });
    }
    if (!(await existsTeamMember(teamMemberId))) {
      return res
        .status(404)
        .json({ error: "Referenced team_member_id was not found" });
    }
    if (!(await existsMemberType(memberTypeId))) {
      return res
        .status(404)
        .json({ error: "Referenced member_type_id was not found" });
    }
    if (await existsPair(teamMemberId, memberTypeId, id)) {
      return res
        .status(409)
        .json({ error: "This team_member/member_type pair already exists" });
    }

    await sql`
      UPDATE "TENA_Admin".team_member_types
      SET team_member_id = ${teamMemberId},
          member_type_id = ${memberTypeId}
      WHERE id = ${id}
    `;

    const row = await fetchTeamMemberTypeById(id);
    res.json(row);
  } catch (err) {
    return handleDbInsertOrUpdateError(err, res, next);
  }
});

// DELETE /api/team_member_types/:id
router.delete("/:id", async (req, res, next) => {
  try {
    const id = toId(req.params.id);
    if (!id) return res.status(400).json({ error: "Invalid ID" });

    const rows = await sql`
      DELETE FROM "TENA_Admin".team_member_types
      WHERE id = ${id}
      RETURNING id
    `;

    if (rows.length === 0)
      return res.status(404).json({ error: "Team Member Type Not Found" });
    res.json({ deleted: rows[0].id });
  } catch (err) {
    next(err);
  }
});

export default router;
