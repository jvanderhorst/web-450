const express = require('express');
const router = express.Router();
const Employee = require('../models/employeeModel');
const Quiz = require('../models/quizModel');

let home_controller = require('../controllers/homeController');

router.get('/', home_controller.index);

router.get('/employee', (req, res, next) => {
    console.log('get request for employees');
    Employee.find({}).exec(function(err, employee){
        if (err) return next(err);
        res.json(employee);
    });
});

router.get('/quiz', (req, res, next) => {
    console.log('get request for quizzes');
    Quiz.find({}).exec((err, quiz) => {
      if (err) return next(err);
      res.json(quiz);
    });
});



module.exports = router;