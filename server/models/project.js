import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
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

export default Project