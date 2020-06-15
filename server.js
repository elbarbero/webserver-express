const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const PORT = process.env.PORT || 3000;

// En /public es donde estan los archivos html
app.use(express.static(__dirname + '/public')); //declaramos el middleware

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'mario'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

/*app.get('/', function (req, res) {
  res.send('Hello World')
});*/

/*app.get('/', (req, res) => {
    let salida = {
        nombre: 'Mario',
        edad: 31,
        url: req.url
    };

    res.send(salida);
});

app.get('/data', (req, res) => {
    res.send('Hola Data');
});*/

//app.listen(3000);

app.listen(PORT, () => {
    console.log(`Escuchando las peticiones en el puerto ${PORT}`);
});