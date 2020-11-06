const makePayment = (req,res)=>{
    res.send("payment successful");
}

const authPayment = (req,res)=>{
    res.send("autenticacion de pago");
}

module.exports = {
    makePayment,
    authPayment
};