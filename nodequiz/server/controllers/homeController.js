const Employee = require('../models/employeeModel');
const Quiz = require('../models/quizModel');
const config = require('../helpers/config');


exports.index = function(req, res, next) {
    res.json("Home Controller works!")
  };

  exports.getQuiz = function(req, res, next) {
    Quiz.find(function(err, quiz) {
      if(err) return next(err);
      console.log(quiz);
      res.json(quiz);
    })
  };

  exports.getEmployee = function(req, res, next) {
    Employee.find(req.body.employeeId, function(err, employee){
      if(err) return next(err);
      console.log(employee);
      res.json(employee);
    })
  };
  
