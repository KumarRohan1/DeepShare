require('dotenv').config();

const mongoose = require('mongoose');

const connectionparams = {
    useNewUrlParser : true,
    useUnifiedTopology : true,
};


 function connectDB()  {


    // Database connection

    mongoose.connect( process.env.MONGO_CONNECTION_URL, connectionparams)
    .then(() => {
        console.info('Connected to Datbase.');
    })
    .catch((e) => {
        console.log("Error: ",e);
    });

    
}

module.exports = connectDB;