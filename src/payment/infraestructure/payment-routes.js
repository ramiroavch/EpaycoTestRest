const express = require("express");
const paymentRoutes = express.Router();

paymentRoutes.get('/',(req,res)=>{
    res.send("payment")
})

module.exports = paymentRoutes;