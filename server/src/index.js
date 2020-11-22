const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const routeRoot = require('./routes');
const { notFound } = require('./middlewares');
const bodyParser = require('body-parser');
const compression = require('compression');

//environment
const { PORT } = require('./config');
//security
app.use(helmet());
//for request json format
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//resolve conflicts cors
app.use(cors({ origin: true, credentials: true }));
//compression gzip
app.use(compression());







//route
app.use('/', routeRoot);
//not found Middleware
app.use(notFound);




app.listen(PORT, (err) => {
    if (err) throw new Error(err);
    console.log(`<<<<<<<<<<<<<<Conecction is sucess:http://localhost:${PORT}>>>>>>>>>>>>>`);
});



//obs:
//"composable-middleware": "^0.3.0",