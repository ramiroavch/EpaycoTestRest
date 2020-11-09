const CustomError = require('../../../common/custom-error');
const Payment = require('../domain/payment');
const mailSender = require('../../../common/mailSender.js');
const Client = require('../../client/domain/client');

const makePayment = async(document,amount,token)=>{
    const client = await Client.findOne({document:document});
    validateClient(client);
    checkCredit(client.balance,amount);
    const payment= new Payment({document,amount,status:'false',token});
    try{
        mailSender.sendMail(client.email,token.toString(),amount.toString());
    }
    catch(err){
        throw err;
    }
    try{
        await payment.save();
    } catch(e){
        throw new CustomError((err.code || 500), err.code ? err.message : "Error al enviar el pago");   
    }
    return payment;
}

const authPayment = async(document,token)=>{
    try{
        const client = await Client.findOne({document:document});
        validateClient(client);
        const payment = await Payment.findOne({document:document,token:token});
        validatePayment(payment);
        checkCredit(client.balance,payment.amount);
        payment.status= "true";
        client.balance -=payment.amount;
        console.log("El balance ess  "+client.balance)
        await client.save();
        await payment.save();
        return payment;
    }
    catch(err){
        throw new CustomError((err.code || 500), err.code ? err.message : "Error al autenticar el pago");
    }

}

const validatePayment = payment => {
    if(payment==null){
        throw new CustomError(404,"Pago no encontrado");
    }
    if(payment.status=='true'){
        throw new CustomError(405,"Este pago ya ha sido validado");
    }
}; 

const validateClient = client => {
    if(client==null){
        throw new CustomError(404,"Cliente no encontrado");
    }
};

const checkCredit= (balance,amount)=>{
    if(balance<amount){
        throw new CustomError(405,'No posee el crédito para realizar el pago');
    }
}

module.exports = {
    makePayment,
    authPayment
};