var express = require('express');
var app = express();
var config = require('./config/config');
var logger = require('./util/logger');
var api = require('./api/api');

// setup the app middlware
require('./middleware/appMiddleware')(app);

app.use('/api', api);


// export the app for testing
module.exports = app;
