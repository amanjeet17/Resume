const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ResumeSchema = new Schema({
  name: {
    type: String
  },
  email :{
    type : String
  },
  subject :{
    type:String
  },
  message :{
    type:String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Resume = mongoose.model('resume', ResumeSchema);
