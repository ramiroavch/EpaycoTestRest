const mongoose = require ('mongoose');

const paymentSchema=mongoose.Schema({
    document:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    token:{
        type:String,
        required:true
    },
    date:{
        type:Date
    }
})
module.exports = mongoose.model ('payment',paymentSchema);