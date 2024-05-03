// models/businessModelSlabsModel.js
const mongoose = require('mongoose');
const Goal = require('./goal');

// Define schema for the 'Business_model_Slabs' table
const businessModelSlabsSchema = new mongoose.Schema({
  goal_name: {
    type: String,
    ref: 'Goal' // Reference to the 'goal' table
  },
  goal_slab_sequence: {
    type: Number,
    required: true
  },
  goal_slab: {
    type: String,
    required: true
  }
});

// Create model for the 'Business_model_Slabs' table
const BusinessModelSlabs = mongoose.model('Business_model_Slabs', businessModelSlabsSchema);

// Define the slabs for RevenueBase and UserBase
const revenueBaseSlabs = [
  { goal_name: 'RevenueBase', goal_slab_sequence: 1, goal_slab: '1-100k' },
  { goal_name: 'RevenueBase', goal_slab_sequence: 2, goal_slab: '100-10,000k' },
  { goal_name: 'RevenueBase', goal_slab_sequence: 3, goal_slab: '10,000-100,000k' }
];

const userBaseSlabs = [
  { goal_name: 'UserBase', goal_slab_sequence: 1, goal_slab: '1-100' },
  { goal_name: 'UserBase', goal_slab_sequence: 2, goal_slab: '100-500' },
  { goal_name: 'UserBase', goal_slab_sequence: 3, goal_slab: '500-1,000' },
  { goal_name: 'UserBase', goal_slab_sequence: 4, goal_slab: '1,000-5,000' }
];

// Function to pre-fill the Business_model_Slabs table
async function preFillSlabs() {
  try {
    // Delete existing slabs
    await BusinessModelSlabs.deleteMany({});

    // Insert new slabs
    await BusinessModelSlabs.insertMany([...revenueBaseSlabs, ...userBaseSlabs]);

    console.log('Slabs pre-filled successfully');
  } catch (error) {
    console.error('Error pre-filling slabs:', error);
  }
}

// Call the pre-fill function
preFillSlabs();

// Export the BusinessModelSlabs model
module.exports = BusinessModelSlabs;
