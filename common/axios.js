const axios = require('axios');

const instance = axios.create({
    baseURL:'http://localhost:3002'
});

instance.defaults.headers.common['Content-Type']="text/xml";

module.exports = instance;