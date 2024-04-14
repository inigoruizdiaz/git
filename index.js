
const express = require('express');
const app = express();

app.use(express.static(_dirname + '/public'));

app.get('/hola', (req, res) => 
{ res.send('ruta Hola');
});

app.get('/adioos', (req, res) => 
{ res.send('ruta adios');
});

app.get('/registro', (req, res) => 
{ res.send('registro');
});


app.listen(3000, () =>{
    console.log('Example app listening on port 3000!');
});