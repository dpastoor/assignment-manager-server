var router = require('express').Router();
var logger = require('../../util/logger');
var moment = require('moment');
var fixtures = {
  phmx601: {
    instructor: "Vijay",
    assignments:[
      {
        assignmentName: 'Assignment 1',
        dueDate: moment().add(1, 'days')
      },
      {
        assignmentName: 'Assignment 2',
        dueDate: moment().add(5, 'days')
      },
      {
        assignmentName: 'Project3',
        dueDate: moment().add(20, 'days')
      }
    ]
  },
  phmx602: {
    instructor: "Joga",
    assignments:[
      {
        assignmentName: 'Practice Problem 1',
        dueDate: moment().add(6, 'days')
      },
      {
        assignmentName: 'Practice Problem 2',
        dueDate: moment().add(10, 'days')
      },
      {
        assignmentName: 'Project 1',
        dueDate: moment().add(30, 'days')
      }
    ]
  }
};

router.route('/')
  .get(function(req, res, next) {
    console.log('received request');
    res.json(fixtures);
    next();
  })

module.exports = router;
