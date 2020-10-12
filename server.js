const path = require('path');
const express = require('express');

const app = express();
app.use(express.static(__dirname + '/dist/ProyectLayout'));

app.get('/*', (req, res) => {
    return res.sendFile(path.join(__dirname, 'dist/ProyectLayout', 'index.html'));
});


app.listen(process.env.PORT || 3000, (err) => {
    if (err) throw new Error(err);
    console.log('Success Proyect Angular');
});