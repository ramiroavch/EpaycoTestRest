const express = require("express");
const paymentController = require('./payment-controller');
const {resultPaymentValidator,makePaymentValidator,
    authPayment}= require('../infraestructure/payment-validator');
const paymentRoutes = express.Router();

paymentRoutes.post('/',makePaymentValidator,resultPaymentValidator,
                    paymentController.makePayment);

paymentRoutes.post('/auth',authPayment,resultPaymentValidator,
                    paymentController.authPayment);

module.exports = paymentRoutes;