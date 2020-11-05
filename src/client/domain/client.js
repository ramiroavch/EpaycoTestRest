const { Schema } = require("mongoose");

const mongoose = require ('mongoose');

const ClientSchema= mongoose.Schema({
    document:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('client',ClientSchema)