const mongoose = require ('mongoose');

const clientSchema= mongoose.Schema({
    document:{
        type:String,
        required:true,
        unique:true
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
    },
    balance:{
        type:Float64Array
    }
})

module.exports = mongoose.model('client',clientSchema)