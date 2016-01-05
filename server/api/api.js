var router = require('express').Router();

// api router will mount other routers
// for all our resources
router.use('/submit', require('./submit/submitRoutes'));
router.use('/assignments', require('./assignments/assignmentRoute'));

module.exports = router;
