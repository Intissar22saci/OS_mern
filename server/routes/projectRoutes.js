//import express from "express"
//import { createProject, getProject, getProjects } from "../controllers/projectController.js"
const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');



router.post("/create", projectController.createProject)

router.get("/", projectController.getProjects)
router.get("/:id", projectController.getProject)

module.exports = router;