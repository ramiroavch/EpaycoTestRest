const paymentService = require('../application/payment-service');

const makePayment = async (req,res)=>{
    try{
        const {document,amount} = req.body;
        const payment = await paymentService.makePayment(document,amount);
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

module.exports = {
    makePayment,
    authPayment
};