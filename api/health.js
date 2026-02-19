import { sql } from "./db.js";

export default async function handler(req, res) {
  try {
    const result = await sql`SELECT NOW()`;
    res.status(200).json({ dbTime: result[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
