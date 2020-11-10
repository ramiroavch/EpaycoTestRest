const express = require('express');
const routes = express.Router();
const clientRoutes = require('../src/client/infraestructure/client-routes');
const paymentRoutes = require('../src/payment/infraestructure/payment-routes');

routes.use('/client',clientRoutes);
routes.use('/payment',paymentRoutes);

routes.get('/',(req,res)=>{
    res.send("default");
})

routes.get('*',(req,res)=>{
    res.send("Not Found");
})

module.exports = routes;