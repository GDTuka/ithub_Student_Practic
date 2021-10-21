const router = require("express").Router();
const User = require("./model/models");

router.get("/", async (req, res) => {
    const data = await User.find({});
    res.json(data);
});

router.post('/',async (req,res)=>{
    console.log(req.body)
    await User(req.body).save()
    res.json({'msg': 'ok'})
})

module.exports = router