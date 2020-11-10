const CustomError = require('../../../common/custom-error');
const Payment = require('../domain/payment');
const Client = require('../../client/domain/client');
const axios = require ('../../../common/axios');
const jsonParser = require ('../../../common/utils')
const {makePaymentXml,authPaymentXml} = require('../domain/paymentXmlRequest');

const makePayment = async(document,amount)=>{
    try{
        const request= makePaymentXml(document,amount);
        const response = await axios.post('/payment',request);
        const json = jsonParser(response.data,'tns:makePaymentResponse');
        const success= json["tns:success"]._text;
        return {ok:success};
    } catch(err){
        console.error(err.message);
        const json = jsonParser(err.response.data,'soap:Fault');
        const errorMsg= json["soap:error"]._text;
        throw new CustomError((err.response.status || 500), err.response.status ? errorMsg : "Error al crear el cliente");   
    }
}

const authPayment = async(document,token)=>{
    try{
        const request= authPaymentXml(document,token);
        const response = await axios.post('/payment/auth',request);
        const json = jsonParser(response.data,'tns:authPaymentResponse');
        const success= json["tns:success"]._text;
        return {ok:success};
    }
    catch(err){
        console.error(err.message);
        const json = jsonParser(err.response.data,'soap:Fault');
        const errorMsg= json["soap:error"]._text;
        throw new CustomError((err.response.status || 500), err.response.status ? errorMsg : "Error al crear el cliente");   
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