const {sign,verify} = require('jsonwebtoken')


const createToken = (user) =>{
    const accessToken = sign({login: user.login, isAdmin:user.idAdmin,id:user.id},"jwt-secret")
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
const getData = (req,res,next)=>{
    const accessToken = req.cookies["token"] 
    const validtoken = verify(accessToken,"jwt-secret")

    function getcookie (){
        let cookie = req.headers.cookie
        return cookie.split('; ')
    } 
    
    return next()
}


module.exports = {createToken,validateToken,getData}