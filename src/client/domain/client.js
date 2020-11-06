const mongoose = require ('mongoose');

const clientSchema= new mongoose.Schema({
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
        type:Number,
        required:true,
        default:0
    }
})

clientSchema.post('save', (err, res, next) => {
    if (err.name === 'MongoError' && err.code === 11000) {
        return next({success:false,message:"Usuario ya existe"});
    }
    else if (err.name==='MongoError') {
        return next({success:false,message:"Error al crear el cliente"});
    }
    next();
});

module.exports = mongoose.model('client',clientSchema)