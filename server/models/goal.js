const mongoose = require('mongoose');

// Define schema for the 'goal' table
const goalSchema = new mongoose.Schema({
  goal_name: {
    type: String,
    enum: ['UserBase', 'RevenueBase'],
    default: 'UserBase' // Default value is 'UserBase'
  }
});

// Create model for the 'goal' table
const Goal = mongoose.model('Goal', goalSchema);

// Export the Goal model
module.exports = Goal;
