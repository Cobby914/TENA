import { Router } from "express";
import authRoutes from "./auth.js";
import programsRoutes from "./programs.routes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/programs", programsRoutes);

export default router;
