var express  = require('express');
var connect = require('connect');
var app      = express();
var port     = process.env.PORT;
// Configuration
app.use(express.static(__dirname + '/public'));
app.use(connect.logger('dev'));
app.use(connect.json());
app.use(connect.urlencoded());
// Routes
require('./routes/routes.js')(app);
app.listen(process.env.PORT,process.env.IP);
console.log('The App runs on port ' + process.env.PORT);
