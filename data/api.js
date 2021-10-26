const router = require("express").Router();
const {User,News,Material,Test} = require("./model/models");
const cockPars = require('cookie-parser')
const {sign,verify} = require('jsonwebtoken')

const {createToken,validateToken,getData} = require('./jwt')

const bcrypt = require('bcrypt')


router.get("/data",async (req, res) => {
    const accessToken = req.cookies["token"] 
    const validtoken = verify(accessToken,"jwt-secret")
    const user = await User.findOne({mail:validtoken.mail})
    res.send(user)
});

router.post('/',async (req,res)=>{
    const {mail, password } = req.body
    const user = req.body
    console.log(user.password)
    const isUserExist = await User.findOne({mail:mail,passwrod:password})
    if(!isUserExist){
        console.log('Логин гавно')
    } else{
         bcrypt.compare(password,isUserExist.password).then((match)=>{
        if(!match){
            console.log("Пароль говно")
        } else{

            const accessToken = createToken(user)
            res.cookie("token",accessToken,{
                maxAge:60*60*24*30*1000
            })

        res.redirect('/')
        }
    })
    }
})

router.post('/register',async (req,res)=>{

    const {login,mail,password} = req.body

    bcrypt.hash(password, 10).then((hash) =>{
        User({login:login,password:hash,mail:mail}).save()
    })
    res.redirect('/login')
})
router.get('/news',async(req,res)=>{
    let data = await News.find({})
    res.json(data)

})
router.post('/news/write', async(req,res)=>{
    const {newsTxT, newsZag} = req.body
    console.log(req.body)
    await News({newsTxT:newsTxT,newsZag:newsZag}).save()
    res.redirect('/addNewsAdmin')
})
router.get('/logout',async(req,res) =>{
    res.clearCookie('token')
    res.redirect('/')
})
router.post('/Material/write',async(req,res) =>{
    const {materialZag,materialTxT} = req.body
    await  Material({materialZag:materialZag,materialTxT:materialTxT}).save()
    res.redirect('/')
})
router.get('/material/get',async(req,res)=>{
    let data = await Material.find({})
    res.json(data)
})
router.post('/test/write',async(req,res)=>{
    let {testName} = req.body
    await Test({testName:testName}).save()
    res.redirect('/')
})
router.get('/test/get',async(req,res)=>{
    let data = await Test.find({})
    res.json(data)
})
module.exports = router