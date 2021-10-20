const router = require("express").Router();
const User = require("./model/models");



router.get("/", (req, res) => {
    User.find().then(data =>{
        res.json({
            data:data
        })
        .catch(err =>{
            console.log(err)
        })
    })
});

module.exports = router