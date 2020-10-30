const path = require('path');
const express = require('express');

const app = express();
app.use(express.static(__dirname + '/dist/client'));
require('dotenv').config();


app.get('/*', (req, res) => {
    return res.sendFile(path.join(__dirname, 'dist/client', 'index.html'));
});


app.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);
    console.log('Success Proyect Angular');
});