const CustomError = require('../../../common/custom-error');
const {createClientXml,rechargeWalletXml,getBalanceXml} = require('../domain/clientXmlRequest');
const axios = require ('../../../common/axios');
const jsonParser = require ('../../../common/utils')

const createClient = async (document,name,lastname,email,phone)=>{
    try{
        const request= createClientXml(document,name,lastname,email,phone);
        const response = await axios.post('/client',request);
        const json = jsonParser(response.data,'tns:registerClientResponse');
        const success= json["tns:success"]._text;
        return {ok:success};
    } catch(err){
        const json = jsonParser(err.response.data,'soap:Fault');
        const errorMsg= json["soap:error"]._text;
        throw new CustomError((err.response.status || 500), err.response.status ? errorMsg : "Error al crear el cliente");
    }
}

const payWallet = async (document,phone,amount)=>{
    try{
        const request= rechargeWalletXml(document,phone,amount);
        const response = await axios.post('/client/pay-wallet',request);
        const json = jsonParser(response.data,'tns:payWalletResponse');
        const success= json["tns:success"]._text;
        return {ok:success};
    }
    catch(err){
        const json = jsonParser(err.response.data,'soap:Fault');
        const errorMsg= json["soap:error"]._text;
        throw new CustomError((err.response.status || 500), err.response.status ? errorMsg : "Error al recargar la billetera");
    }
}

const consultWallet = async(document,phone)=>{
    try{
        const request= getBalanceXml(document,phone);
        const response = await axios.post('/client/get-balance',request);
        const json = jsonParser(response.data,'tns:getBalanceResponse');
        const balance= json["tns:balance"]._text;
        const success = json["tns:success"]._text;
        return {balance: balance,ok:success};
    }
    catch(err){
        const json = jsonParser(err.response.data,'soap:Fault');
        const errorMsg= json["soap:error"]._text;
        throw new CustomError((err.response.status || 500), err.response.status ? errorMsg : "Error al consultar la billetera");
    }
}

module.exports={
    createClient,
    payWallet,
    consultWallet
}

