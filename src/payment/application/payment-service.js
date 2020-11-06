const CustomError = require('../../../common/custom-error');
const payment = require('../domain/payment');

const makePayment = async(document,amount,token)=>{
    const response= new payment({document,amount,status:'false',token});
    try{
        await response.save()
        return response;
    } catch(e){
        throw new CustomError(500,"Error al registrar el pago");
    }
}

const authPayment = async(document,token)=>{
    try{
        const response = await payment.findOne({document:document,token:token});
        validatePayment(response);
        response.status= "true";
        await response.save;
        return response;
    }
    catch(err){
        throw new CustomError(500,"Error al confirmar el pago"); 
    }

}

const validatePayment = payment => {
    if(payment==null){
        throw new CustomError(404,"Pago no encontrado");
    }
}; 

module.exports = {
    makePayment,
    authPayment
};