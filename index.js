var express = require('express');
var app = express();
var path = require('path');

app.use(express.urlencoded(true))
app.use('/',require("./routes/routes"))
app.use(express.static(__dirname +'/public'))

app.listen(5000,function(){
    console.log('server is alive')
})