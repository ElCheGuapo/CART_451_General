var express = require('express');
var app = express();

const portNumber = 3000;

var jsRouter = require('./router.js');

//both index.js and things.js should be in same directory

app.use(express.static(__dirname + '/public'));
app.use('/', jsRouter);

app.listen(portNumber, function(req, res){
    console.log("server is running on port " + portNumber);
});