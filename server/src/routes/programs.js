import { Router } from "express";
import { verifyAuth } from "../middleware/auth.js";
import { getProgramsForUser } from "../services/programs.service.js";

const router = Router();

router.get("/", verifyAuth, async (req, res) => {
  const programs = await getProgramsForUser(req.user.sub);
  res.json(programs);
});

export default router;
