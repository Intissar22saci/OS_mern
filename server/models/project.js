//import mongoose, { Schema } from "mongoose";
const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
    userpro:{  type: String,
        required: true},
    title: { type: String, required: true },
    date: { type: Date, required: true },
    stage: {
        type: String,
        default: "backlog",
        enum: ["backlog", "in progress", "done"]
    }
},
    { timestamps: true }
)

const Project = mongoose.model("Project", projectSchema)

module.exports =Project;