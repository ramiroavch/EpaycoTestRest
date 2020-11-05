const express = require('express');
const walletRoutes = express.Router();

walletRoutes.get('/',(req,res)=>{
    res.send("wallet");
})


module.exports = walletRoutes;