function connectDB() {
    console.log("База данных подключена")
    const MongoClient = require("mongodb").MongoClient;
    const user = "Tuka"
    const pwd = "23445667423Ar"
    const uri = `mongodb://${user}:${pwd}@MainCluster.krjpt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    return new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = connectDB