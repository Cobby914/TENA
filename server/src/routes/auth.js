import { Router } from "express";
import { sql } from "../db/index.js";

const router = Router();

router.post("/sync", async (req, res) => {
  const { id, email, name } = req.body;

  await sql`
    INSERT INTO users (id, email, name)
    VALUES (${id}, ${email}, ${name})
    ON CONFLICT (id) DO NOTHING
  `;

  res.json({ success: true });
});

export default router;
