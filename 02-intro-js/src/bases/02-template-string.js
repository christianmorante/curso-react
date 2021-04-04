console.log('React - Hola Mundo');

const nombre = 'Christian';
const apellido = 'Morante';

// concatenacion tradicional
const nombreCompleto = nombre + ' ' + apellido;
console.log( nombreCompleto );

// template strings
//const nombreCompleto2 = `${nombre} ${apellido}`;
const nombreCompleto2 = `
${nombre}
${apellido}
2`;
console.log( nombreCompleto2 );

function getSaludo(nombre) {
    return 'Hola '+nombre;
}

console.log( `Texto ${getSaludo('Chris')}` );