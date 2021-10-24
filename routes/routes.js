const router = require("express").Router()
var path = require('path');

const cockPars = require('cookie-parser')

const {createToken,validateToken,getData} = require('../data/jwt.js')

router.get('/',(req, res) => {
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
router.get('/Login',getData,(req,res)=>{
    res.sendFile(path.join(path.dirname(__dirname))+ "/pages/login/login.html");
})
router.get('/Register',(req,res)=>{

    res.sendFile(path.join(path.dirname(__dirname))+ "/pages/register/register.html");
})
router.get('/addNewsAdmin',(req,res)=>{
    res.sendFile(path.join(path.dirname(__dirname))+ "/pages/addNewsAdmin/addNewsAdmin.html");
})
router.get('/addMaterialAdmin',(req,res)=>{
    res.sendFile(path.join(path.dirname(__dirname))+ "/pages/addMaterialAdmin/addMaterialAdmin.html");
})
router.get('/profile',(req,res)=>{
    res.sendFile(path.join(path.dirname(__dirname))+ "/pages/profile/profile.html");
})
router.get('Material/learn',(req,res)=>{
    res.sendFile(path.join(path.dirname(__dirname))+ "/pages/materialLenr/maretialLearn.html");
})
router.get('/addTest',(req,res)=>{
    res.sendFile(path.join(path.dirname(__dirname))+ "/pages/addTest/addTest.html")
})
module.exports = router