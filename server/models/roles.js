const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = new Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true,
  },
  name: { type: String, required: true },
  last_created: { type: Date, default: Date.now },
  created_by: { type: String },
  last_updated: { type: Date, default: Date.now },
  updated_by: { type: String }
},{ collection: 'roles' });

const Roles = mongoose.model('Roles', roleSchema);

module.exports = Roles;