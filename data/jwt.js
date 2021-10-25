const {sign,verify} = require('jsonwebtoken')
const {User,News} = require("./model/models");

const createToken = (user) =>{
    const accessToken = sign({mail:user.mail},"jwt-secret")
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
const getData = async (req,res,next)=>{
    
    return next()
}

// не работало то , что я передевал в sign хуету конкретную, щас вроде исправил, дальше нужно оформить что-то вроде logout, чтобы ещё из сессии удалялся токен и тогда всё должно заработать полностью

module.exports = {createToken,validateToken,getData}