const express = require('express');
const clientController = require('./client-controller');
const clientRoutes = express.Router();
const {registerValidator,resultRegisterValidator,payWalletValidator,
        consultWallet} = require ('./client-validator');

clientRoutes.post('/',registerValidator,resultRegisterValidator,clientController.registerClient);
clientRoutes.put('/wallet',payWalletValidator,resultRegisterValidator,clientController.payWallet);
clientRoutes.get('/wallet',consultWallet,resultRegisterValidator,clientController.consultWallet);

module.exports = clientRoutes;