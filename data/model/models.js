const db = require('../api/dbGoose')

const UserSchema = new db.Schema({
    login: String,
    password: String,
    mail: String,
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

module.exports = User