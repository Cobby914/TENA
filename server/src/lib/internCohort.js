import { sql } from "../db/index.js";

function badRequest(message) {
  const err = new Error(message);
  err.statusCode = 400;
  return err;
}

/**
 * Ensures a team member may be assigned the given cohort (non-null).
 * Only members with the "intern" member type may have cohort_id set.
 */
export async function assertMemberMayHaveCohort(teamMemberId, cohortId) {
  const cohortRows = await sql`
    SELECT id
    FROM "TENA_Admin".cohorts
    WHERE id = ${cohortId}
  `;
  if (cohortRows.length === 0) {
    throw badRequest("Cohort not found");
  }

  const memberRows = await sql`
    SELECT id
    FROM "TENA_Admin".team_members
    WHERE id = ${teamMemberId}
  `;
  if (memberRows.length === 0) {
    const err = new Error("Team Member Not Found");
    err.statusCode = 404;
    throw err;
  }

  const internRows = await sql`
    SELECT 1
    FROM "TENA_Admin".team_member_types tmt
    JOIN "TENA_Admin".member_types mt ON mt.id = tmt.member_type_id
    WHERE tmt.team_member_id = ${teamMemberId}
      AND LOWER(mt.name) = 'intern'
    LIMIT 1
  `;
  if (internRows.length === 0) {
    throw badRequest(
      "cohort_id can only be set for members with the intern member type",
    );
  }
}

/**
 * After team_member_types rows change, keep cohort_id consistent: only interns
 * may have a cohort; clear it when the member is no longer an intern.
 */
export async function syncCohortForMemberInternStatus(teamMemberId) {
  const internRows = await sql`
    SELECT 1
    FROM "TENA_Admin".team_member_types tmt
    JOIN "TENA_Admin".member_types mt ON mt.id = tmt.member_type_id
    WHERE tmt.team_member_id = ${teamMemberId}
      AND LOWER(mt.name) = 'intern'
    LIMIT 1
  `;
  if (internRows.length === 0) {
    await sql`
      UPDATE "TENA_Admin".team_members
      SET cohort_id = NULL
      WHERE id = ${teamMemberId}
    `;
  }
}
