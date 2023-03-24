require('dotenv').config();


const mongoose = require('mongoose');


const dburl = "mongodb+srv://DeepShare:xqvR1UeHpOus5mJp@cluster0.qob0zdz.mongodb.net/DeepShare?retryWrites=true&w=majority";
const connectionparams = {
    useNewUrlParser : true,
    useUnifiedTopology : true,
};


 function connectDB()  {

    // Database connection

    mongoose.connect( dburl , connectionparams)
    .then(() => {
        console.info('Connected to Datbase.');
    })
    .catch((e) => {
        console.log("Error: ",e);
    });
}

module.exports = connectDB;