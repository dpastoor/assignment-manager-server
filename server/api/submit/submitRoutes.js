var router = require('express').Router();
var logger = require('../../util/logger');


router.route('/')
  .get(function(req, res, next) {
    console.log(req);
  });

module.exports = router;
