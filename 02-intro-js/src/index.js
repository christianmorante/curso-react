console.log('React - Hola Mundo');


// Desestructuracion
// Asignacion desestructurante

const persona = {
    nombre: 'Christian',
    edad:35,
    clave: 'Ironman',
    rango: 'Soldado'
};

//const { nombre, edad } = persona;

//console.log(nombre);
//console.log(edad);

const retornaAvenger = ({clave, nombre, edad, rango = 'Capitan'}) => {
    console.log(clave,nombre,edad,rango);

    return {
        nombreclave: clave,
        anios: edad
    };
};

const avenger = retornaAvenger(persona);
console.log(avenger);