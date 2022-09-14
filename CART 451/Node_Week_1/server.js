var express = require('express');
var app = express();
let server = require('http').createServer(app);

//call the require statement
const WebSocket = require("ws");
const wss = new WebSocket.Server({server});

// app.use('/passingTheVars',handleGetVars);
// app.use('/dataUpload',handlePostedData);

const portNumber = 3000;

var jsRouter = require('./router.js');


app.use('/wsC', wsClientRequestRoute);
//and the function:
function wsClientRequestRoute(req, res, next) {
    res.sendFile(__dirname + '/public/ws.html');
}
//both index.js and things.js should be in same directory


wss.on('connection', function connection(ws,req) {
    const in_ip = req.connection.remoteAddress;
  //log to SERVER console
    console.log(`a connection has been established from ${ip}`);
  //use the socket instance to SEND message back
    ws.send("test message from server");
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });
});

app.use(express.static(__dirname + '/public'));
app.use('/', jsRouter);

app.listen(portNumber, function(req, res){
    console.log("server is running on port " + portNumber);
});













// const fileuploadMiddleWare = require("express-fileupload");
// app.use(fileuploadMiddleWare());

// function handlePostedData(request,response){
//     console.log(request.body); //body of packet
//     console.log(request.files); //request
//     if(!request.files)
//     {
//         response.send("File was not found");
//         return;
//     }
//     // using the name attributes of the form fields ...
//     console.log("the color chosen:: "+request.body.color);
//       console.log("the favorite city chosen:: "+request.body.city);
 
//     // here is the field name of the form
//     let  temp_file = request.files.imageF;
 
//      let imagePath  = __dirname + '/public/images/'+request.files.imageF.name;
//     // Use the mv() method to place the file somewhere on your server
//     temp_file.mv(imagePath, function(err) {
//     if (err)
//         return response.status(500).send(err);
//         response.send('File uploaded!');
//     });
// }
// function handleGetVars(request,response,next){
//     console.log(request.url);
//     console.log(request.query);
//     response.send("GOT IT! THANKS!");
// }
