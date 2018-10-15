const mongoose = require('mongoose');
  
const employeeSchema = new mongoose.Schema({
    employeeId: Number,
    firstName: String,
    lastName: String
});

const Employee = module.exports = mongoose.model('Employee', employeeSchema);
