import { getHeroeById } from './bases/08-imports'
import heroes from './data/heroes';

console.log('React - Hola Mundo');

// Promesas en js
// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         console.log('2 segundos despues');
//         const heroe = getHeroeById(3);
        
//         //resolve(heroe);
//         reject('No se encontro el heroe');
//     }, 2000);
// });

// promesa
//     .then( (elheroe) => {
//         console.log('then de la promesa');
//         console.log('el then',elheroe);
//     })
//     .catch(err => console.warn(err));

const getHeroByIdAsync = ( id ) => {
    const promesa = new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log('2 segundos despues');
            
            const heroe = getHeroeById(id);
            console.log(heroe);
            if ( heroe ) {
                resolve(heroe);
            }
            else {
                reject('No se encontro el heroe');
            }
        }, 2000);
    });
    return promesa;
};

getHeroByIdAsync(10)
    //.then( heroe => console.log('heroe: ', heroe))
    .then( console.log )
    .catch( console.error );