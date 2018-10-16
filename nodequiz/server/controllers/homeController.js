const Employee = require('../models/employeeModel');
const Quiz = require('../models/quizModel');
const config = require('../helpers/config');


exports.index = function(req, res, next) {
    res.json("Home Controller works!")
  };

  
  
