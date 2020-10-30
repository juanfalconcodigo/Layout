const path = require('path');
const express = require('express');
require('dotenv').config({ path: '../.env' });
const app = express();
app.use(express.static(__dirname + '/client'));



app.get('/*', (req, res) => {
    return res.sendFile(path.join(__dirname, '/client', 'index.html'));
});

console.log(process.env.PORT);

app.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);
    console.log('Success Proyect Angular');
});