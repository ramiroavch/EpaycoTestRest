const client = require('../domain/client');

const createClient = async (document,name,lastname,email,phone)=>{
    const response= new client({document,name,lastname,email,phone,balance:0});
    try{
        await response.save()
        return response;
    } catch(e){
        throw new Error("Error creando el cliente");
    }
}


module.exports={
    createClient
}

