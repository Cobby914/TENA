import { Router } from "express";

import programsRouter from "./programs.js";
import teamMembersRouter from "./team_members.js";
import newsletterSubscribersRouter from "./newsletter_subscribers.js";
//Ave put your routes here:

const router = Router();

router.use("/programs", programsRouter);
router.use("/team-members", teamMembersRouter);
router.use("/newsletter-subscribers", newsletterSubscribersRouter);
router.use("/team_members", teamMembersRouter);
router.use("/newsletter_subscribers", newsletterSubscribersRouter);
//Ave put 'router.use' here:

// router.use("/auth", authRoutes);
// router.use("/programs", programsRoutes);

export default router;
