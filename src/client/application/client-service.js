const CustomError = require('../../../common/custom-error');
const client = require('../domain/client');

const createClient = async (document,name,lastname,email,phone)=>{
    const response= new client({document,name,lastname,email,phone,balance:0});
    try{
        await response.save()
        return response;
    } catch(e){
        throw new CustomError(500,"Error al crear el cliente");
    }
}


const payWallet = async (document,phone,amount)=>{
    try{
        const response = await client.findOne({document:document,phone:phone});
        validateClient(response);
        response.balance += amount;
        await response.save();
        return response;
    }
    catch(err){
        throw new CustomError((err.code || 500), err.code ? err.message : "Error al recargar la billetera");
    }
}

const consultWallet = async(document,phone)=>{
    try{
        const response = await client.findOne({document:document,phone:phone});
        validateClient(response);
        return {balance: response.balance};
    }
    catch(err){
        throw new CustomError((err.code || 500), err.code ? err.message : "Error al consultar la billetera");
    }
}

const validateClient = client => {
    if(client==null){
        throw new CustomError(404,"Cliente no encontrado");
    }
}; 

module.exports={
    createClient,
    payWallet,
    consultWallet
}

