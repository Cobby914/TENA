import { Router } from "express";
import { sql } from "../db/index.js";
import { verifyAuth, requireApproved, requireRole } from "../middleware/auth.js";

const router = Router();
const adminOnly = [verifyAuth, requireApproved, requireRole("admin")];

// GET /api/programs
router.get("/", async (req, res, next) => {
  try {
    const rows = await sql`
      SELECT id, title, summary, problem, solution, problem_image, solution_image, background_image, link, created_at, updated_at
      FROM "TENA_Admin".programs
      ORDER BY id ASC
    `;
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

// GET /api/programs/:id
router.get("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const rows = await sql`
      SELECT id, title, summary, problem, solution, problem_image, solution_image, background_image, link, created_at, updated_at
      FROM "TENA_Admin".programs
      WHERE id = ${id}
    `;

    if (rows.length === 0) {
      return res.status(404).json({ error: "Program Not Found" });
    }
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// POST /api/programs
router.post("/", ...adminOnly, async (req, res, next) => {
  try {
    const { title, summary, problem, solution, problem_image, solution_image, background_image, link } = req.body;

    if (!title || typeof title !== "string") {
      return res.status(400).json({ error: "Title is required (string)" });
    }
    if (problem_image !== undefined && problem_image !== null && typeof problem_image !== "string") {
      return res.status(400).json({ error: "problem_image must be a string" });
    }
    if (solution_image !== undefined && solution_image !== null && typeof solution_image !== "string") {
      return res.status(400).json({ error: "solution_image must be a string" });
    }
    if (background_image !== undefined && background_image !== null && typeof background_image !== "string") {
      return res.status(400).json({ error: "background_image must be a string" });
    }
    if (link !== undefined && link !== null && typeof link !== "string") {
      return res.status(400).json({ error: "link must be a string" });
    }

    const rows = await sql`
      INSERT INTO "TENA_Admin".programs (title, summary, problem, solution, problem_image, solution_image, background_image, link)
      VALUES (${title}, ${summary ?? null}, ${problem ?? null}, ${solution ?? null}, ${problem_image ?? null}, ${solution_image ?? null}, ${background_image ?? null}, ${link ?? null})
      RETURNING id, title, summary, problem, solution, problem_image, solution_image, background_image, link, created_at, updated_at
    `;

    res.status(201).json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// PUT /api/programs/:id
router.put("/:id", ...adminOnly, async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const { title, summary, problem, solution, problem_image, solution_image, background_image, link } = req.body;

    if (problem_image !== undefined && problem_image !== null && typeof problem_image !== "string") {
      return res.status(400).json({ error: "problem_image must be a string" });
    }
    if (solution_image !== undefined && solution_image !== null && typeof solution_image !== "string") {
      return res.status(400).json({ error: "solution_image must be a string" });
    }
    if (background_image !== undefined && background_image !== null && typeof background_image !== "string") {
      return res.status(400).json({ error: "background_image must be a string" });
    }
    if (link !== undefined && link !== null && typeof link !== "string") {
      return res.status(400).json({ error: "link must be a string" });
    }

    const rows = await sql`
      UPDATE "TENA_Admin".programs
      SET
        title            = COALESCE(${title ?? null}, title),
        summary          = COALESCE(${summary ?? null}, summary),
        problem          = COALESCE(${problem ?? null}, problem),
        solution         = COALESCE(${solution ?? null}, solution),
        problem_image    = COALESCE(${problem_image ?? null}, problem_image),
        solution_image   = COALESCE(${solution_image ?? null}, solution_image),
        background_image = COALESCE(${background_image ?? null}, background_image),
        link             = COALESCE(${link ?? null}, link),
        updated_at       = NOW()
      WHERE id = ${id}
      RETURNING id, title, summary, problem, solution, problem_image, solution_image, background_image, link, created_at, updated_at
    `;

    if (rows.length === 0) {
      return res.status(404).json({ error: "Program Not Found" });
    }
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/programs/:id
router.delete("/:id", ...adminOnly, async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const rows = await sql`
      DELETE FROM "TENA_Admin".programs
      WHERE id = ${id}
      RETURNING id
    `;

    if (rows.length === 0) {
      return res.status(404).json({ error: "Program Not Found" });
    }
    res.json({ deleted: rows[0].id });
  } catch (err) {
    next(err);
  }
});

export default router;