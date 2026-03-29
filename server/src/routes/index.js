import { Router } from "express";
import teamMembersRouter from "./team_members.js";
import cohortsRouter from "./cohorts.js";
import memberTypesRouter from "./member_types.js";
import teamMemberTypesRouter from "./team_member_types.js";

import programsRouter from "./programs.js";
import newsletterSubscribersRouter from "./newsletter_subscribers.js";
import companyInfoRouter from "./company_info.js";
import usersRouter from "./users.js";
import authRouter from "./auth.js";

const router = Router();

router.use("/programs", programsRouter);
router.use("/cohorts", cohortsRouter);
router.use("/member-types", memberTypesRouter);
router.use("/member_types", memberTypesRouter);
router.use("/team-member-types", teamMemberTypesRouter);
router.use("/team_member_types", teamMemberTypesRouter);
router.use("/team-members", teamMembersRouter);
router.use("/newsletter-subscribers", newsletterSubscribersRouter);
router.use("/team_members", teamMembersRouter);
router.use("/newsletter_subscribers", newsletterSubscribersRouter);
router.use("/company_info", companyInfoRouter);
router.use("/users", usersRouter);
router.use("/auth", authRouter);

// router.use("/auth", authRoutes);
// router.use("/programs", programsRoutes);

export default router;
