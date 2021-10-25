const express = require('express');
const app = express();
var path = require('path');
const parser = require('cookie-parser')
const session = require('express-session')

app.use(session({
    secret: 'jwt-secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))
app.use(parser())
app.use(express.urlencoded(true)); 
app.use(express.json())
app.use('/',require("./routes/routes"))
app.use(express.static(__dirname +'/public'))
app.use("/api", require('./data/api'))


app.set('trust proxy', 1)
app.listen(5000,function(){
    console.log('server is alive')
})
