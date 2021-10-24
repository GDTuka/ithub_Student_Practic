const router = require("express").Router();
const {User,News} = require("./model/models");
const cockPars = require('cookie-parser')

const {createToken,validateToken,getData} = require('./jwt')

const bcrypt = require('bcrypt')


router.get("/data",getData, async (req, res) => {
    res.json({mesg:"ok"})
});

router.post('/',async (req,res)=>{
    const {mail, password } = req.body
    const user = req.body
    console.log(user.password)
    const isUserExist = await User.findOne({mail:mail,passwrod:password})
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
router.get('/someThink', function(req, res, next) {
    if (req.session.views) {
      req.session.views++
      res.setHeader('Content-Type', 'text/html')
      res.write('<p>views: ' + req.session.id + '</p>')
      res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
      res.end()
    } else {
      
      res.end('welcome to the session demo. refresh!')
    }
  })

module.exports = router