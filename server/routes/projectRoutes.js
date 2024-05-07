import express from "express"
import { createProject, getProject, getProjects } from "../controllers/projectController.js"

const router = express.Router()

router.post("/create", createProject)

router.get("/", getProjects)
router.get("/:id", getProject)


export default router