const path = require('path');
const express = require('express');
const morgan = require('morgan');
require('dotenv').config({ path: '../.env' });
const routeRoot = require('./src/routes');
const app = express();



/* app.use(morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms'
    ].join(' ')
  })); */

//we are defining a new parameter called host
morgan.token('host', function(req, res) {
    return req.hostname;
});
morgan.token('request-headers', function(req, res) { return JSON.stringify(req.headers) });

// we are using the host parameter
app.use(morgan(':method :host :status :res[content-length] - :response-time ms :request-headers'))

app.use(express.static(__dirname + '/client'));

//route
app.use('/', routeRoot);
//angular
app.get('/*', (req, res) => {
    return res.sendFile(path.join(__dirname, '/client', 'index.html'));
});

console.log(process.env.PORT);

app.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);
    console.log('Success Proyect Angular');
});