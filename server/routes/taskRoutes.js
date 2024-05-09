const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');



router.post("/create", taskController.createTask)

router.get("/", taskController.getTasks)
router.get("/:id", taskController.getTask)

router.put("/update/:id", taskController.updateTask)

module.exports = router;