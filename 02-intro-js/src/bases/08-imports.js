//import { heroes } from './data/heroes'
import heroes, { owners } from '../data/heroes'




console.log( owners );

// const getHeroeById = (id) => {
//     return heroes.find( (hero) => {
//         return hero.id === id;
//     });
// };
// const getHeroeById = (id) => {
//     return heroes.find( (hero) =>  hero.id === id );
// };
const getHeroeById = (id) =>  heroes.find( (hero) =>  hero.id === id );
//console.log( getHeroeById(2));


const getHeroeByOwner = (owner) =>  heroes.filter( (hero) =>  hero.owner === owner );
//console.log( getHeroeByOwner('DC'));

export { getHeroeById, getHeroeByOwner };