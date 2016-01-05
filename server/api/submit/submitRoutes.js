var router = require('express').Router();
var logger = require('../../util/logger');


router.route('/')
  .get(function(req, res, next) {
    console.log(req);
  })
  .post(function(req, res, next) {
    console.log('req');
    console.log(req);
    console.log('req-body');
    console.log(req.body);
    res.send("file uploaded");
  });

module.exports = router;
