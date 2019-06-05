const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ISBN:{
        type:Number,
        required: true
    },
    Author:{
        type:mongoose.Schema.ObjectId,
        ref:'Author',
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    YearOfPub:{
        type:String,
        required:true
    },
    Publisher:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("book",BookSchema);
