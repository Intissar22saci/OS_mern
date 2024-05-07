import express from "express"
import { createTask, getTask, getTasks, updateTask } from "../controllers/taskController.js"

const router = express.Router()

router.post("/create", createTask)

router.get("/", getTasks)
router.get("/:id", getTask)

router.put("/update/:id", updateTask)


export default router