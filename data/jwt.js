const {sign,verify} = require('jsonwebtoken')
const {User,News} = require("./model/models");

const createToken = (user) =>{
    const accessToken = sign({mail:user.mail},"jwt-secret")
    return accessToken
}

const validateToken = (req,res,next) =>{
    const accessToken = req.cookies["token"] 
    console.log(accessToken)
    if(accessToken){
        try {
            const validtoken = verify(accessToken,"jwt-secret")
            if(validtoken){
                req.authenticated = true
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


module.exports = {createToken,validateToken,getData}