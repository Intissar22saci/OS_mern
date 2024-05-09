const Task = require('../models/task');

module.exports = {
  async createTask(req, res) {
    try {
      const { title, description, stage, date } = req.body;

      const task = await Task.create({
        title,
        description,
        stage,
        date,
      })

      res.status(200).json({ status: true, task, message: "Task created successfully." })

    } catch (error) {
      console.log(error)
      return res.status(400).json({ staus: false, message: error.message })
    }
  },

  async getTasks(req, res) {
    try {
      const { stage } = req.query;
      let query = {};

      if (stage) {
        query.stage = stage;
      }

      let queryResult = await Task.find(query)

      const tasks = queryResult

      res.status(200).json({ staus: true, tasks })
    } catch (error) {
      console.log(error)
      return res.status(400).json({ status: false, message: error.message })
    }
  },

  async getTask(req, res) {
    try {
      const { id } = req.params
      const task = await Task.findById(id)

      res.status(200).json({ status: true, task })
    } catch (error) {
      console.log(error)
      return res.status(400).json({ status: false, message: error.message })
    }
  },

  async updateTask(req, res) {
    try {
      const { id } = req.params
      const { title, description, stage, date } = req.body

      const task = await Task.findById(id)

      task.title = title
      task.description = description
      task.date = date
      task.stage = stage

      await task.save()
      res.status(200).json({ status: true, message: 'Task updated successfully' })
    } catch (error) {
      console.log(error)
      return res.status(400).json({ staus: false, message: error.message })
    }
  },

  async duplicateTask(req, res) {
    try {
      const { id } = req.params;
      const task = await Task.findById(id);

      const newTask = await Task.create({
        ...task,
        title: task.title + " - Duplicate",
      });

      newTask.stage = task.stage;

      await newTask.save();


      res
        .status(200)
        .json({ status: true, message: "Task duplicated successfully." });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ status: false, message: error.message });
    }
  },

  async deleteTask(req, res) {
    try {
      const { id } = req.params;
      const { actionType } = req.query;

      if (actionType === "delete") {
        await Task.findByIdAndDelete(id);
      } else if (actionType === "deleteAll") {
        await Task.deleteMany({ isTrashed: true });
      }

      res.status(200).json({
        status: true,
        message: `Task Deleted successfully.`,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ status: false, message: error.message });
    }
  }

}