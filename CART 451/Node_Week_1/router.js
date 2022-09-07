var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('GET route index');
});


router.get('/fruit', function(req, res){
   res.sendFile(__dirname + '/public/index.html');
});
router.post('/fruit', function(req, res){
   res.send('POST Fruits');
});


router.get('/veg', function(req, res){
    res.send('GET Veggies');
});
router.post('/veg', function(req, res){
    res.send('POST Veggies');
});

//export this router to use in our index.js
module.exports = router;