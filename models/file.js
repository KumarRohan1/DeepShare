const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const fileSchema = new Schema({
    filename:{ type: String, reqired: true },
    path:{ type: String, reqired: true },
    size:{ type: Number, reqired: true },
    uuid:{ type: String, required: true},
    sender:{ type: String, reqired: false },
    reciever:{type: String, reqired: false },
}, { timestamps: true });


module.exports = mongoose.model('File', fileSchema);