const express = require('express');
const app = express();

//--importing routes
const routes = require('./common/routes');

//---settings
app.set('port', process.env.PORT || 3000);

//---middlewares

//---routes
require ('./app/routes')
//---staticfiles

app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
});