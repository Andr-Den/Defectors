const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

companySchema.index({ name: 'text' });

module.exports = mongoose.model('company', companySchema);
