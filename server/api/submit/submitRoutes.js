var router = require('express').Router();
var logger = require('../../util/logger');
var fs = require('fs');
var path = require('path');
router.route('/')
  .get(function(req, res, next) {
    console.log(req);
  })
  .put(function(req, res, next) {
    var outStream = fs.createWriteStream(path.resolve(__dirname, "../../../uploads/testfile.pdf"));
    req.pipe(outStream);
    // console.log('req');
    // console.log(req);
    // console.log('req-body');
    // console.log(req.body);
    res.send("file uploaded");
  });

module.exports = router;
