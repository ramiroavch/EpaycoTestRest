const express = require('express');
const router = express.Router();
const clientRoutes = require('../src/client/infraestructure/client-routes');
const paymentRoutes = require('../src/payment/infraestructure/payment-routes');

router.use('/client',clientRoutes);
router.use('/payment',paymentRoutes);

router.get('/',(req,res)=>{
    res.send("default");
})

router.get('*',(req,res)=>{
    res.send("Not Found");
})

module.exports = router;