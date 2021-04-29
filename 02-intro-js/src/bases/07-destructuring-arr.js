console.log('React - Hola Mundo');


// Desestructuracion arrays


const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , ,p3 ] = personajes;

//console.log( p1 );
//console.log( p2 );
console.log( p3 );


const retornaArreglo = () => {
    return ['ABC', 123];
};

const [letras, numeros] = retornaArreglo();


//console.log(arr);
console.log(letras);
console.log(numeros);

const usaStado = (valor) => {
    return [valor, (nombre) => { console.log('Hola mundo '+nombre) }]
};

const [nombre, setNombre] = usaStado('Goku');
//console.log(arr);
console.log(nombre);
setNombre('Vegeta');

