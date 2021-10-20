const router = require("express").Router()
var path = require('path');

router.get('/', function(req, res) {
    res.sendFile(path.join(path.dirname(__dirname))+ "/pages/newsPage/MainPage.html");
});
router.get('/documents',(req,res)=>{
    res.sendFile(path.join(path.dirname(__dirname))+ "/pages/documents/documents.html");
})
router.get('/contacts',(req,res)=>{
    res.sendFile(path.join(path.dirname(__dirname))+ "/pages/contacts/contacts.html");
})
router.get('/kval',(req,res)=>{
    res.sendFile(path.join(path.dirname(__dirname))+ "/pages/kval/kval.html");
})
router.get('/Login',(req,res)=>{
    res.sendFile(path.join(path.dirname(__dirname))+ "/pages/login/login.html");
})
router.get('/Register',(req,res)=>{
    res.sendFile(path.join(path.dirname(__dirname))+ "/pages/register/register.html");
})
module.exports = router