
const express = require('express');
const app = express();

app.use(express.static(_dirname + '/public'));

app.get('/registro', (req, res) => 
{ res.send('ruta registro');
});

app.get('/audiovisuales', (req, res) => 
{ res.send('ruta audiovisuales');
});

app.get('/login', (req, res) => 
{ res.send('ruta para logn');
});

app.get('/login', (req, res) => 
{ res.send('ruta de login nueva');
});

app.listen(3000, () =>{
    console.log('Example app listening on port 3000!');
});