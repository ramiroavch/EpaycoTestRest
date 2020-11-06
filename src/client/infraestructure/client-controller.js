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

const payWallet = (req,res)=>{
    res.send("recarga de billetera");
}

const consultWallet = (req,res)=>{
    res.send("obtener saldo de billetera")
}

module.exports={
    registerClient,
    payWallet,
    consultWallet
};
