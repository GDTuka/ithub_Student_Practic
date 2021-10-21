const db = require('../api/dbGoose')

const UserSchema = new db.Schema({
    login: {type: String, required: true,unique:true},
    password: {type: String, required: true},
    mail: {type: String, required: true,unique:true},
    admin: Boolean,
    teacher: Boolean,
    junAdmin: Boolean,
    middleAdmin: Boolean,
})

const newNewsSchema = new db.Schema({
    newsTxT: String,
    newsZag: String,
    date: Date,
    author: String
})
const User = db.model('User',UserSchema)
const News = db.model('News',newNewsSchema)

module.exports = User