import { Router } from "express";
import { sql } from "../db/index.js";

const router = Router();

//GET /api/newsletter_subscribers

router.get("/", async (req, res, next) => {
  try {
    const rows = await sql`
      SELECT email, first_name, last_name, subscribed_at
      FROM "TENA_Admin".newsletter_subscribers
      ORDER BY subscribed_at DESC
    `;
    res.json(rows);
  } catch (err) {
    next(err);
  }
});


//GET /api/newsletter-subscribers/:email

router.get("/:email", async (req, res, next) => {
  try {
    const { email } = req.params;

    const rows = await sql`
      SELECT email, first_name, last_name, subscribed_at
      FROM "TENA_Admin".newsletter_subscribers
      WHERE email = ${email}
    `;

    if (rows.length === 0) return res.status(404).json({ error: "Subscriber Not Found" });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});


//POST /api/newsletter_subscribers (body: email, first_name?, last_name?)

router.post("/", async (req, res, next) => {
  try {
    const { email, first_name, last_name } = req.body;

    if (!email || typeof email !== "string") {
      return res.status(400).json({ error: "email is required (string value)" });
    }

    const rows = await sql`
      INSERT INTO "TENA_Admin".newsletter_subscribers (email, first_name, last_name)
      VALUES (${email}, ${first_name ?? null}, ${last_name ?? null})
      RETURNING email, first_name, last_name, subscribed_at
    `;

    res.status(201).json(rows[0]);
  } catch (err) {
    next(err);
  }
});


//PUT /api/newsletter_subscribers/:email (body: first_name?, last_name?)

router.put("/:email", async (req, res, next) => {
  try {
    const { email } = req.params;
    const { first_name, last_name } = req.body;

    const rows = await sql`
      UPDATE "TENA_Admin".newsletter_subscribers
      SET
        first_name = COALESCE(${first_name ?? null}, first_name),
        last_name = COALESCE(${last_name ?? null}, last_name)
      WHERE email = ${email}
      RETURNING email, first_name, last_name, subscribed_at
    `;

    if (rows.length === 0) return res.status(404).json({ error: "Subscriber Not Found" });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});


//DELETE /api/newsletter_subscribers/:email

router.delete("/:email", async (req, res, next) => {
  try {
    const { email } = req.params;

    const rows = await sql`
      DELETE FROM "TENA_Admin".newsletter_subscribers
      WHERE email = ${email}
      RETURNING email
    `;

    if (rows.length === 0) return res.status(404).json({ error: "Subscriber Not Found" });
    res.json({ deleted: rows[0].email });
  } catch (err) {
    next(err);
  }
});

export default router;
