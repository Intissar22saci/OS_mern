import express from "express";
import taskRoutes from "./taskRoutes.js";
import projectRoutes from "./projectRoutes.js";


const router = express.Router();

router.use("/task", taskRoutes);
router.use("/project", projectRoutes)

export default router;