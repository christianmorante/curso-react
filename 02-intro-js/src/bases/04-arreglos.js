console.log('React - Hola Mundo');


// Arreglos en JS
//const arreglo = new Array(100);
//const arreglo = [];
const arreglo = [1,2,3,4];
//arreglo.push(1);


let arreglo2 = [ ...arreglo, 5]

// funcion map de JS :
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const arreglo3 = arreglo2.map( function(numero) {
    return numero*2;
});

console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );