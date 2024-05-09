const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
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

module.exports = Project;