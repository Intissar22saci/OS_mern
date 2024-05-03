const Users = require('../models/users');
const UserProjects = require('../models/userprojects');
const Roles = require('../models/roles');
const bcrypt = require('bcrypt');
const generateUID = require('../utils/generateUID');
const nodemailer = require('nodemailer');
const session = require('express-session');
 


module.exports = {
  async insertUser(req, res) {
   
    try {
      const { firstName, lastName, middleName, salutation, email, password, description, businessModel, goal_type, currentRevenue, growthTarget } = req.body;
      const uuid = generateUID();

      const existingUser = await Users.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
      }

      const createdBy = uuid;
      const updatedBy = createdBy;

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new Users({
        uuid,
        email,
        first_name: firstName,
        last_name: lastName,
        middle_name: middleName,
        salutation,
        password: hashedPassword,
        created_by: createdBy,
        updated_by: updatedBy
      });

      await newUser.save();

      const newProject = new UserProjects({
        user_id: uuid,
        brief_text: description,
        model_type: businessModel,
        goal_type,
        goal_current_state: currentRevenue,
        goal_target_state: growthTarget,
        created_by: createdBy,
        updated_by: updatedBy
      });

      await newProject.save();

      res.status(201).json({ message: 'User and project created successfully', uuid });
    } catch (err) {
      console.error('Error creating user:', err);
      res.status(500).json({ message: err.message });
    }
  },

  async updateProject(req, res) {
    try {
      const { role, companysize, industry, website } = req.body;
      const { uuid } = req.params;

      if (!role || !companysize || !industry) {
        return res.status(400).json({ message: 'Role, CompanySize, and Industry are required' });
      }

      const project = await UserProjects.findOne({ user_id: uuid });
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }

      project.role = role;
      project.companysize = companysize;
      project.industry = industry;
      project.website = website;

      await project.save();

      res.status(200).json({ message: 'Project updated successfully', uuid });
    } catch (err) {
      console.error('Error:', err);
      res.status(500).json({ message: err.message });
    }
  },

  async addRole(req, res) {
    try {
      const { name } = req.body;
      const uuid = req.params.uuid;
      const roles = new Roles({
        name: name,
        created_by: uuid,
        updated_by: uuid
      });

      const savedRole = await roles.save();
      res.json(savedRole);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async getBusinessModelSlabs(req, res)  {
    const { goal_name } = req.query;
    try {
      let ques1 = [];
      let ques2 = [];
  
      switch (goal_name) {
        case 'RevenueBase':
          ques1 = revenueBasecurrent;
          ques2 = revenueGrowthTargets;
          break;
        case 'UserBase':
          ques1 = userBasecurrent;
          ques2 = UserBaseGrowthTargets;
          break;
        default:
          // Return an empty array if goal_name doesn't match any of the predefined slabs
          break;
      }
  
      // Combine both slabs arrays into one response
      let allSlabs = [];
      if (ques1.length > 0) {
        allSlabs.push({ goal_name: goal_name, ques1: ques1 });
      }
      if (ques2.length > 0) {
        allSlabs.push({ goal_name: goal_name, ques2: ques2 });
      }
      res.json(allSlabs);
  
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },
  async sendInvitation(req, res) {




    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'albertmadani01@gmail.com',
        pass: 'mmtqibuxelxzroyg',
      }
    });
  
    try {
      const { uuid } = req.params;
      const { firstName, email } = req.body;
  
      if (!uuid || !firstName || !email) {
        return res.status(400).json({ message: 'User ID, first name, and email are required.' });
      }
  
      // Find the user based on the provided user ID
      const user = await Users.findOne({ uuid: uuid });
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }
  
      // Send the invitation email
      await transporter.sendMail({
        from: user.email,
        to: email,
        subject: 'Invitation',
        text: `Hello ${firstName}, you have been invited!`
      });
  
      res.status(201).json({ message: 'Invitation sent successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  },
  async updateUsers(req,res){
    try {
      const uuid = req.params.uuid;
      const { description, businessModel, goal_type, currentRevenue, growthTarget } = req.body;
  
      const updatedFields = {
        brief_text: description,
        model_type: businessModel,
        goal_type,
        goal_current_state: currentRevenue,
        goal_target_state: growthTarget,
      };
  
      const updatedUserprojects = await UserProjects.findOneAndUpdate({ user_id: uuid }, updatedFields, { new: true });
  
      if (!updatedUserprojects) {
        return res.status(404).json({ message: 'User projects not found' });
      }
  
      res.json({ message: 'User projects updated successfully', userProjects: updatedUserprojects });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }


  }
}
