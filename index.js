
const express = require('express');
const app = express();

app.use(express.static(_dirname + '/public'));

app.get('/hola', (req, res) => 
{ res.send('ruta Hola');
});