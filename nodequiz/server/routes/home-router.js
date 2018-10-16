const express = require('express');
const router = express.Router();
const Employee = require('../models/employeeModel');
const Quiz = require('../models/quizModel');

let home_controller = require('../controllers/homeController');

router.get('/', home_controller.index);


router.get('/employee', (req, res, next) => {
    console.log('get request for employees');
    Employee.find({}).exec(function(err, employeeName){
        if (err) return next(err);
        res.json(employeeName);
    });
});

router.get('/quiz', (req, res, next) => {
    console.log('get request for quizzes');
    Quiz.find({}).exec((err, quizName) => {
      if (err) return next(err);
      res.json(quizName);
      console.log(quizName);
    });
});

router.get('/quiz/:id', (req, res, next) => {
    console.log('get request for quizzes');
    Quiz.findById(req.params.id).exec((err, quiz) => {
      if (err) return next(err);
      res.json(quiz);
      console.log(quiz);
    });
});

router.get('/employee/:id', (req, res, next) => {
    console.log('get request for quizzes');
    Employee.findById(req.params.id).exec((err, Employee) => {
      if (err) return next(err);
      res.json(Employee);
      console.log(Employee);
    });
});



module.exports = router;