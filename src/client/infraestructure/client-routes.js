const express = require('express');
const clientRoutes = express.Router();

clientRoutes.get('/',(req,res)=>{
    res.send('client')
})

module.exports = clientRoutes;