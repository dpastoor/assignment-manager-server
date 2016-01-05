var router = require('express').Router();
var logger = require('../../util/logger');
var fs = require('fs');
var path = require('path');
var url = require('url');
router.route('/')
  .get(function(req, res, next) {
    console.log(req);
  })
  .put(function(req, res, next) {
    var query = url.parse(req.url, true).query;
    var filename = query.class.toUpperCase() + "/" + query.assignment.toUpperCase() + "_" + query.user.toUpperCase() + ".pdf";
    console.log('adding file: ' + filename)
    var outStream = fs.createWriteStream(path.resolve(__dirname, "../../../uploads/" + filename));
    req.pipe(outStream);
    res.send("file uploaded");
  });

module.exports = router;
