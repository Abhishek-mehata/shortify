const mongoose = require("mongoose")

async function connectDB(url) {
    return mongoose.connect(url)
        .then(() => console.log("MongoDb Database connected"))
        .catch((err) => console.log("Invalid database cridentals, server err"))
}


module.exports = {
    connectDB
}