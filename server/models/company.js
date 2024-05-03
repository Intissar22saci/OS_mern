const mongoose = require('mongoose');

const companyDetailsSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  industry: {
    type: String,
    required: true,
  },
  companySize: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
},{ collection:'company_details'});

const CompanyDetails = mongoose.model('CompanyDetails', companyDetailsSchema);

module.exports = CompanyDetails;
