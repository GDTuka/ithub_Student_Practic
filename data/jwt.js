const {sign,verify} = require('jsonwebtoken')
const decoder = require('jwt-decode')
var JWTR =  require('jwt-redis')




const createToken = (user) =>{
    const accessToken = sign({mail:user.mail},"")
    return accessToken
}
const destroyToken = (req,res,next) =>{
    destroy(req.cookies['token'])
}
const validateToken = (req,res,next) =>{
    const accessToken = req.cookies["token"] 
    console.log(accessToken)
    if(accessToken){
        try {
            const validtoken = verify(accessToken,"")
            if(validtoken){
                req.authenticated = true
                res.json()
                return next()
            } else{
                return next()
            }
        } catch(err){
            console.log(err)
        }
    }
}
const getData = (req,res,next)=>{

    const accessToken = req.cookies["token"] 
    const validtoken = verify(accessToken,"jwt-secret")
    var decoded = decoder(accessToken)
    console.log(validtoken)
    function getcookie (){
        req.cookies["token"] = null
    } 
    return next()
}

// не работало то , что я передевал в sign хуету конкретную, щас вроде исправил, дальше нужно оформить что-то вроде logout, чтобы ещё из сессии удалялся токен и тогда всё должно заработать полностью

module.exports = {createToken,validateToken,getData}