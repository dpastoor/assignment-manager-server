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
    console.log('parsed url');
    var query = url.parse(req.url, true).query;
    console.log(query);
    console.log(query.class.toUpperCase());
    var filename = query.class.toUpperCase() + "/" + query.assignment.toUpperCase() + ".pdf";
    var outStream = fs.createWriteStream(path.resolve(__dirname, "../../../uploads/" + filename));
    req.pipe(outStream);
    console.log('req');
    console.log(req);
    console.log('req-body');
    console.log(req.body);
    res.send("file uploaded");
  });

module.exports = router;
