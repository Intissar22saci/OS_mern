const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  uuid: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  first_name: {
    type: String,
    maxlength: 100,
  },
  last_name: {
    type: String,
    maxlength: 100,
  },
  middle_name: {
    type: String,
    maxlength: 100,
  },
  salutation: {
    type: String,
    enum: ['mr', 'mrs', 'miss', 'they', 'them', 'others'],
    maxlength: 20,
  },
  password: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
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
} ,{ collection: 'users' });

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
