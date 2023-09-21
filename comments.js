// Create Web Server
var express = require('express');
var app = express();

// Set port
var port = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');

// Set path
app.use('/assets', express.static(__dirname + '/public'));

// Set controller
var commentsController = require('./controllers/commentsController');

// Fire controllers
commentsController(app);

// Listen to port
app.listen(port);