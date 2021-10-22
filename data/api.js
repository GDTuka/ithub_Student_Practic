const router = require("express").Router();
const {User,News} = require("./model/models");
const cockPars = require('cookie-parser')

const {createToken,validateToken,getData} = require('./jwt')

const bcrypt = require('bcrypt')


router.get("/data",getData, async (req, res) => {
    res.json({shit : '1234'})
});

router.post('/',async (req,res)=>{
    const {mail, password } = req.body
    const user = req.body
    console.log(user)
    const isUserExist = await User.findOne({mail:mail})
    const UserPwdCorrect = isUserExist.password

    if(!isUserExist){
        console.log('Логин гавно')
    } else{
         bcrypt.compare(password,UserPwdCorrect).then((match)=>{
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
router.post('/news',async(req,res)=>{
    const data = await News.find({})
    res.json(data)
})
router.post('/news/write', async(req,res)=>{
    const {newsTxT, newsZag} = req.body
    await News({newsTxt:newsTxt,newsZag:newsZag})
    res.redirect('/')
})


module.exports = router