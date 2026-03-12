import { Router } from "express";
import teamMembersRouter from "./team_members.js";
import cohortsRouter from "./cohorts.js";

import programsRouter from "./programs.js";
import newsletterSubscribersRouter from "./newsletter_subscribers.js";
import companyInfoRouter from "./company_info.js";
import programStatsRouter from "./program_stats.js";
import usersRouter from "./users.js";
import authRouter from "./auth.js";

const router = Router();

router.use("/programs", programsRouter);
router.use("/team-members", teamMembersRouter);
router.use("/newsletter-subscribers", newsletterSubscribersRouter);
router.use("/team_members", teamMembersRouter);
router.use("/newsletter_subscribers", newsletterSubscribersRouter);
router.use("/company_info", companyInfoRouter);
router.use("/program_stats", programStatsRouter);
router.use("/users", usersRouter);
router.use("/auth", authRouter);

// router.use("/auth", authRoutes);
// router.use("/programs", programsRoutes);

export default router;
