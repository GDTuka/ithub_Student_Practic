const router = require("express").Router()
var path = require('path');

router.get('/', function(req, res) {
    console.log('1324')
    res.sendFile(path.join(path.dirname(__dirname))+ "/pages/newsPage/MainPage.html");
});

module.exports = router