const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  frequency: {
    type: String,
    required: true
  },
    competition: {
    type: String,
    required: true
  },
  good_drinks: {
    type: String,
    required: true
  },
  good_staff: {
    type: String,
    required: true
  },
  exclusive_recommendation: {
    type: String,
    required: true
  },
  
  mail : {
    type: String,
    required: false
  }
});

// Create collection and add schema
const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;