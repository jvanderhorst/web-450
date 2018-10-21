const express = require('express');
const router = express.Router();
const Employee = require('../models/employeeModel');
const Quiz = require('../models/quizModel');

let home_controller = require('../controllers/homeController');

router.get('/', home_controller.index);

//Get request for all employees
router.get('/employee', (req, res, next) => {
    console.log('get request for employees');
    Employee.find({}).exec(function(err, employeeName){
        if (err) return next(err);
        res.json(employeeName);
    });
});
//Get request for all quizzes
router.get('/quiz', (req, res, next) => {
    console.log('get request for quizzes');
    Quiz.find({}).exec((err, quizName) => {
      if (err) return next(err);
      res.json(quizName);
      console.log(quizName);
    });
});
//Get request for quiz by id
router.get('/quiz/:id', (req, res, next) => {
    console.log('get request for quizzes');
    Quiz.findById(req.params.id).exec((err, quiz) => {
      if (err) return next(err);
      res.json(quiz);
      console.log(quiz);
    });
});
//Get request for employee by id
router.get('/employee/:id', (req, res, next) => {
    console.log('get request for quizzes');
    Employee.findById(req.params.id).exec((err, Employee) => {
      if (err) return next(err);
      res.json(Employee);
      console.log(Employee);
    });
});

module.exports = router;