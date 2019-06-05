const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required: true
    },
    nationality:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model("Author",AuthorSchema);
