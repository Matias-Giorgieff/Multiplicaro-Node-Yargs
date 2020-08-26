/* const argv = require('./config/yargs'); */ /* Para usar esta constante tendriamos que usar argv.argv para eso luego del require podemos agregar .argv */
const argv = require('./config/yargs').argv;
const colors = require('colors');

const multiplicar = require('./multiplicar/multiplicar');
/* se puede declarar directamente la funcion con {} */
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}