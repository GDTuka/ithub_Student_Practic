const express = require('express');
const app = express();
var path = require('path');


app.use(express.urlencoded(true)); // Чтобы получать req.body (методом post)
app.use(express.json())
app.use('/',require("./routes/routes"))
app.use(express.static(__dirname +'/public'))
app.use("/api", require('./data/api'))

app.listen(5000,function(){
    console.log('server is alive')
})
