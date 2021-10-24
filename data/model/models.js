const db = require('../api/dbGoose')

const UserSchema = new db.Schema({
    login: {type: String, required: true,unique:true},
    password: {type: String, required: true},
    mail: {type: String, required: true,unique:true},
    admin: {type: Boolean, default: false},
    teacher: {type: Boolean, default: false},
    junAdmin: {type: Boolean, default: false},
    middleAdmin:{type: Boolean, default: false},
    kvalName:String
})

const newNewsSchema = new db.Schema({
    newsTxT: String,
    newsZag: String,
    date: Date,
    author: String
})

const newMaterial = new db.Schema({
    materialZag: String,
    materialTxT : String
})

const testModel = new db.Schema({
    testName: String
})

const Material = db.model("Materil",newMaterial)
const User = db.model('User',UserSchema)
const News = db.model('News',newNewsSchema)
const Test = db.model("Test",testModel)

module.exports = {User,News,Material,Test}