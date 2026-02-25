import { Router } from "express";
import teamMembersRouter from "./team_members.js";
import cohortsRouter from "./cohorts.js";


const router = Router();

router.use("/team_members", teamMembersRouter);
router.use("/team-members", teamMembersRouter);
router.use("/cohorts", cohortsRouter);

// router.use("/auth", authRoutes);
// router.use("/programs", programsRoutes);

export default router;
