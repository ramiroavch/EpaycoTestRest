const clientService = require('../application/client-service');

const registerClient = async (req,res)=>{
    try{
        const {document,name,lastname,email,phone} = req.body;
        const client = await clientService.createClient(document,name,lastname,email,phone);
        res.status(200).send(client);
    }
    catch(err){
        res.status(404).send({success:false,message:err.message});
    }
};

const payWallet = async (req,res)=>{
    try{
        const {document,phone,amount} = req.body;
        const client = await clientService.payWallet(document,phone,amount);
        res.status(200).send(client);
    }
    catch(err){
        res.status(err.code).send(err.message);
    }
}

const consultWallet = (req,res)=>{
    res.send("obtener saldo de billetera")
}

module.exports={
    registerClient,
    payWallet,
    consultWallet
};
