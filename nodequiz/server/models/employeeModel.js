const mongoose = require('mongoose');
  
const employeeSchema = new mongoose.Schema({
    employeeId: Number,
    firstName: String,
    lastName: String
},
    {collection: 'employee'}
);

const Employee = module.exports = mongoose.model('Employee', employeeSchema);

module.exports.getById = (id, callback) => {
    var query = {employeeId: id};
    Employee.findById(query, callback);
}