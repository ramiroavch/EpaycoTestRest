const express = require('express');
const clientController = require('./client-controller');
const clientRoutes = express.Router();

clientRoutes.post('/',clientController.registerClient)

module.exports = clientRoutes;