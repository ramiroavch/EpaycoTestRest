const mongoose = require('mongoose');
const url= 'mongodb://localhost:27017/epayco-test'

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
    })
    .then(db=> console.log('Database is connected'))
    .catch(err =>console.error(err));