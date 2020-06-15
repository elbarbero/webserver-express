const hbs = require('hbs');

// helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((p, index) => {
        palabras[index] = p.charAt(0).toUpperCase() + p.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});