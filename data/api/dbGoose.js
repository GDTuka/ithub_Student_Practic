const db = require("mongoose")

const user = "Tuka"
const pwd = "23445667423Ar"
const uri = `mongodb+srv://Tuka:${pwd}@cluster0.8azro.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

db.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
module.exports = db