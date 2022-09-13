var express = require('express');
var router = express.Router();

router.get('/index', function(req, res){
    res.sendFile(__dirname + '/public/html/index.html');
});
router.post('/index', function(req, res){
    res.send('POST index');
 });


router.get('/about', function(req, res){
   res.sendFile(__dirname + '/public/html/about.html');
});
router.post('/about', function(req, res){
   res.send('POST about');
});


router.get('/main', function(req, res){
    res.sendFile(__dirname + '/public/html/main.html');
});
router.post('/main', function(req, res){
    res.send('POST main');
});

//export this router to use in our index.js
module.exports = router;