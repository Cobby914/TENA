import { requireAuth } from "./_auth.js";

export default function handler(req, res) {
  if (!requireAuth(req, res)) return;
  res.json({ secret: "Protected data 🔐" });
}