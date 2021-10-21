const router = require("express").Router();
const User = require("./model/models");

router.get("/data", async (req, res) => {
    const data = await User.find({});
    res.json(data);
});
router.get('/login',async (req,res)=>{
    const {login,password} = req.body
    const user = await User.findOne({login,password}).lean()
    res.json(user);
})
router.post('/',async (req,res)=>{
    console.log(req.body)
    await User(req.body).save()
    res.json({'msg': 'ok'})
})

module.exports = router