console.log('React - Hola Mundo');

// Objetos Literales
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 554546858,
        lat: 14.3245,
        lng: 34.25565
    }
};

//console.log( persona );
//console.table( persona );
//console.log( {persona} );

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);
