const paymentService = require('../application/payment-service');

const makePayment = async (req,res)=>{
    try{
        const {document,amount} = req.body;
        const payment = await paymentService.makePayment(document,amount,54201234);
        res.status(200).send(payment);
    }
    catch(err){
        if(err.code!=null)
            res.status(err.code).send(err.message);
        else
            res.status(500).send(err.message);
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
            res.status(err.code).send(err.message);
        else
            res.status(500).send(err.message);
    }
}

module.exports = {
    makePayment,
    authPayment
};