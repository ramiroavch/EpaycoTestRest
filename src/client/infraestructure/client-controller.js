const registerClient = (req,res)=>{
    res.send("registro de cliente");
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
