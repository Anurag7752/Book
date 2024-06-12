const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookName:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require:true,
    },
    description:{
        type: String,
        require: true,
    },
    author: {
        type: String,
        require: true
    },
    image:{
        type: String,
        require: true,
    },
    price: {
        type: String,
        require: true,
    }
});

module.exports = new mongoose.model("Books",bookSchema);