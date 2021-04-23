console.log('React - Hola Mundo');


// Funciones
// function saludar(nombre) {
//     return `Hola ${ nombre }`; 
// }

const saludar = function(nombre) {
    return `Hola ${ nombre }`; 
}

const saludar2 = (nombre) => {
    return `Hola ${ nombre }`; 
};

const saludar3 = (nombre) =>  `Hola ${ nombre }`; 
const saludar4 = () =>  `Hola mundo`; 




//saludar = 20;
console.log( saludar( 'Goku' ));
console.log( saludar2('Vegeta') );
console.log( saludar3('Goku') );
console.log( saludar4() );

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El objeto usuario'
    };
};

const getUser2 = () =>  ({
    uid: 'ABC123',
    username: 'El objeto usuario'
});


console.log( getUser() );
console.log( getUser2() );

// Tarea
// 1 funcion clecha
// 2 objeto implicito
// pruebas
function getUsuarioActivo( nombre ) {
    return {
        uid: 'ABC123',
        username: nombre
    };
};

const getUsuarioActivo2 = ( nombre ) => {
    return {
        uid: 'ABC123',
        username: nombre
    };
};

const getUsuarioActivo3 = ( nombre ) => ({
    uid: 'ABC123',
    username: nombre
});

const activeUser = getUsuarioActivo('Christian');

const activeUser2  = getUsuarioActivo2('Christian funcion2');

const activeUser3  = getUsuarioActivo2('Christian funcion3');

console.log( activeUser );
console.log( activeUser2 );
console.log( activeUser3 );