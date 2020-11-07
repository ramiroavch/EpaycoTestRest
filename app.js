const express = require('express');
const app = express();
const cors = require('cors');

//--importing routes
const routes = require('./common/routes');

//---settings
app.set('port', process.env.PORT || 3000);
app.use(express.json());

app.use(cors());

require('./common/database-connection');
app.use('/',routes);

//---middlewares

//---routes

//---staticfiles

app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
});