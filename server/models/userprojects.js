const mongoose = require('mongoose');
//userprojects.js
const userProjectSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    ref: 'users', // Reference to the Users collection
  },
  brief_text: {
    type: String,
    maxlength: 500,
  },

  model_type: {
    type: String,
    //enum: ['Saas', 'Ecommerce'],
  },
  goal_type: {
    type: String,
    // enum: ['UserBase', 'RevenueBase'],
  },
  goal_current_state: {
    type: String,
    //enum: ['0-100k', '100k-1m', '1m-10m', 'other'],
    required: true,
    maxlength: 100,
  },
  goal_target_state: {
    type: String,
    //enum: ['100k-250k', '250k-1m', '1m-10m', 'other'],
    required: true,
    maxlength: 100,
  },
  
  role: {
    type: String,
    maxlength: 100,
  },
  companysize: {
    type: String,
    maxlength: 100,
  },
  website: {
    type: String,
    maxlength: 100,
  },
  industry: {
    type: String,
    maxlength: 100,
  },
  
  last_created: {
    type: Date,
    default: Date.now,
  },
  created_by: {
    type: String,
    required: true,
  },
  last_updated: {
    type: Date,
    default: Date.now,
  },
  updated_by: {
    type: String,
    required: true,
  },
},{ collection: 'user_projects' });

const UserProjects = mongoose.model('UserProjects', userProjectSchema);

module.exports = UserProjects;