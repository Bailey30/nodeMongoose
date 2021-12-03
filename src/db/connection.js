const mongoose = require("mongoose")

require("dotenv").config()

const connect = async () => {
    try {
        return await mongoose.connect(process.env.MONGO_URI)
        // console.log("successful database connection");
    } catch (error) {
        console.log(error);
    }
}

connect()

// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// const connection = mongoose.connection;

// module.exports = { connection };