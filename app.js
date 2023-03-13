// const fs = require('fs');
const yargs = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');

const argv = require('./config/yargs');

console.clear();

// console.log( process.argv );

// console.log(process.argv);

// const [ , , arg3 = 'base=5' ] = process.argv;
// const [, base=5 ] = arg3.split('=');
// console.log( base );

crearArchivo( argv.b, argv.l, argv.t )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.log(err) );