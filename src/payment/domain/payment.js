const mongoose = require ('mongoose');

const paymentSchema=mongoose.Schema({
    amount:{
        type:Float64Array,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
})