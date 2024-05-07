import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: false},
    date: { type: Date, required: true },
    stage: {
        type: String,
        default: "backlog",
        enum: ["backlog", "todo", "in progress", "done"]
    }
},
    { timestamps: true }
)

const Task = mongoose.model("Task", taskSchema)

export default Task