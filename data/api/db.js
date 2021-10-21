function connectDB() {
    console.log("База данных подключена")
    const MongoClient = require("mongodb").MongoClient;
    const user = "Tuka"
    const pwd = "23445667423Ar"
    const uri = `mongodb+srv://Tuka:${pwd}@cluster0.8azro.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    return new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true
    })
}

module.exports = connectDB