const Project = require('../models/project');

module.exports = {
    async createProject(req, res) {
        try {
            const { title, description, stage, date } = req.body;

            const project = await Project.create({
                title,
                description,
                stage,
                date,
            })

            res.status(200).json({ status: true, project, message: "Project created successfully." })

        } catch (error) {
            console.log(error)
            return res.status(400).json({ staus: false, message: error.message })
        }

    },

    async getProjects(req, res) {
        try {
            const { stage } = req.query;
            let query = {};

            if (stage) {
                query.stage = stage;
            }

            let queryResult = await Project.find(query)

            const projects = queryResult

            res.status(200).json({ staus: true, projects })
        } catch (error) {
            console.log(error)
            return res.status(400).json({ status: false, message: error.message })
        }
    },

    async getProject(req, res) {
        try {
            const { id } = req.params
            const project = await Project.findById(id)

            res.status(200).json({ status: true, project })
        } catch (error) {
            console.log(error)
            return res.status(400).json({ status: false, message: error.message })
        }
    }
}
