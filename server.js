var http = require('http');
var express = require('express');
var app = express();
var controllers = require('./controllers');

app.set('view engine', 'vash');

//Set the public static resources folder
app.use(express.static(__dirname + '/public'));


// Map the routes
controllers.init(app);


var server = http.createServer(app)


server.listen(2000);