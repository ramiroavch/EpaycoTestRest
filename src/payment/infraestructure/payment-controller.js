const paymentService = require('../application/payment-service');

const makePayment = async (req,res)=>{
    try{
        const {document,amount} = req.body;
        const payment = await paymentService.makePayment(document,amount,getRandomdigits(6));
        res.status(200).send(payment);
    }
    catch(err){
        res.status(err.code).send({success:false,message:err.message});
    }
}

const authPayment = async(req,res)=>{
    try{
        const {document,token} = req.body;
        const payment = await paymentService.authPayment(document,token);
        res.status(200).send(payment);
    }
    catch(err){
        if(err.code!=null)
            res.status(err.code).send({success:false,message:err.message});
        else
            res.status(500).send({success:false,message:err.message});
    }
}

const getRandomdigits= (length)=> {
    var randomChars = '01234567899876543210';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

module.exports = {
    makePayment,
    authPayment
};