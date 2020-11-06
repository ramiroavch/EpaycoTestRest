const mongoose = require ('mongoose');

const paymentSchema=mongoose.Schema({
    document:{
        type:String,
        required:true
    },
    amount:{
        type:Float64Array,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    token:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model ('user',userSchema);