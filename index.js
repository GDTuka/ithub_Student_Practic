var express = require('express');
var app = express();
const parser = require("body-parser").json();
var path = require('path');

app.use(express.urlencoded(true)); 
app.use(express.json());
app.use(parser);
app.use('/',require("./routes/routes"))
app.use(express.static(__dirname +'/public'))

app.use("/api", require('./data/api'))

app.listen(5000,function(){
    console.log('server is alive')
})
