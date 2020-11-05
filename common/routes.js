const express = require('express');
const router = express.Router();
const clientRoutes = require('../src/client/infraestructure/client-routes');

router.use('/client',clientRoutes);

router.get('/',(req,res)=>{
    res.send("default");
})

module.exports = router;