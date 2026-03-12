import { Router } from "express";
import { sql } from "../db/index.js";

const router = Router();

// GET /api/programs

router.get("/", async (req, res, next) => {
  try {
    const rows = await sql`
      SELECT id, title, summary, problem, solution, image_key, link, created_at, updated_at
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
      SELECT id, title, summary, problem, solution, image_key, link, created_at, updated_at
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


// POST /api/programs (body: title, summary, problem, solution, image_key?, link?)

router.post("/", async (req, res, next) => {
  try {
    const { title, summary, problem, solution, image_key, link } = req.body;

    if (!title || typeof title !== "string") {
      return res.status(400).json({ error: "Title is required (string)" });
    }
    if (image_key !== undefined && image_key !== null && typeof image_key !== "string") {
      return res.status(400).json({ error: "image_key must be a string" });
    }
    if (link !== undefined && link !== null && typeof link !== "string") {
      return res.status(400).json({ error: "link must be a string" });
    }

    const rows = await sql`
      INSERT INTO "TENA_Admin".programs (title, summary, problem, solution, image_key, link)
      VALUES (${title}, ${summary ?? null}, ${problem ?? null}, ${solution ?? null}, ${image_key ?? null}, ${link ?? null})
      RETURNING id, title, summary, problem, solution, image_key, link, created_at, updated_at
    `;

    res.status(201).json(rows[0]);
  } catch (err) {
    next(err);
  }
});


// PUT /api/programs/:id (body: title?, summary?, problem?, solution?, image_key?, link?)

router.put("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const { title, summary, problem, solution, image_key, link } = req.body;
    if (image_key !== undefined && image_key !== null && typeof image_key !== "string") {
      return res.status(400).json({ error: "image_key must be a string" });
    }
    if (link !== undefined && link !== null && typeof link !== "string") {
      return res.status(400).json({ error: "link must be a string" });
    }

    const rows = await sql`
      UPDATE "TENA_Admin".programs
      SET
        title = COALESCE(${title ?? null}, title),
        summary = COALESCE(${summary ?? null}, summary),
        problem = COALESCE(${problem ?? null}, problem),
        solution = COALESCE(${solution ?? null}, solution),
        image_key = COALESCE(${image_key ?? null}, image_key),
        link = COALESCE(${link ?? null}, link),
        updated_at = NOW()
      WHERE id = ${id}
      RETURNING id, title, summary, problem, solution, image_key, link, created_at, updated_at
    `;

    if (rows.length === 0) {
      return res.status(404).json({ error: "Program Not Found" });
    }
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});


//DELETE /api/programs/:id

router.delete("/:id", async (req, res, next) => {
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
