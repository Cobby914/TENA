import { Router } from "express";
import { sql } from "../db/index.js";

const router = Router();

// GET /api/company_info

router.get("/", async (req, res, next) => {
  try {
    const rows = await sql`
      SELECT id, name, email, phone, address, city, state, zip, created_at
      FROM "TENA_Admin".company_info
      ORDER BY id ASC
    `;
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

// GET /api/company_info/:id

router.get("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const rows = await sql`
      SELECT id, name, email, phone, address, city, state, zip, created_at
      FROM "TENA_Admin".company_info
      WHERE id = ${id}
    `;

    if (rows.length === 0) {
      return res.status(404).json({ error: "Company Info Not Found" });
    }
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// POST /api/company_info (body: name, email?, phone?, address?, city?, state?, zip?)

router.post("/", async (req, res, next) => {
  try {
    const { name, email, phone, address, city, state, zip } = req.body;

    if (!name || typeof name !== "string") {
      return res.status(400).json({ error: "name is required (string value)" });
    }

    const rows = await sql`
      INSERT INTO "TENA_Admin".company_info (name, email, phone, address, city, state, zip)
      VALUES (${name}, ${email ?? null}, ${phone ?? null}, ${address ?? null}, ${city ?? null}, ${state ?? null}, ${zip ?? null})
      RETURNING id, name, email, phone, address, city, state, zip, created_at
    `;

    res.status(201).json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// PUT /api/company_info/:id (body: name?, email?, phone?, address?, city?, state?, zip?)

router.put("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const { name, email, phone, address, city, state, zip } = req.body;

    if (name !== undefined && typeof name !== "string") {
      return res.status(400).json({ error: "name must be a string" });
    }

    const rows = await sql`
      UPDATE "TENA_Admin".company_info
      SET
        name = COALESCE(${name ?? null}, name),
        email = COALESCE(${email ?? null}, email),
        phone = COALESCE(${phone ?? null}, phone),
        address = COALESCE(${address ?? null}, address),
        city = COALESCE(${city ?? null}, city),
        state = COALESCE(${state ?? null}, state),
        zip = COALESCE(${zip ?? null}, zip)
      WHERE id = ${id}
      RETURNING id, name, email, phone, address, city, state, zip, created_at
    `;

    if (rows.length === 0) return res.status(404).json({ error: "Company Info Not Found" });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/company_info/:id

router.delete("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const rows = await sql`
      DELETE FROM "TENA_Admin".company_info
      WHERE id = ${id}
      RETURNING id
    `;

    if (rows.length === 0) return res.status(404).json({ error: "Company Info Not Found" });
    res.json({ deleted: rows[0].id });
  } catch (err) {
    next(err);
  }
});

export default router;