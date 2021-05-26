import { getHeroeByIdAsync } from "../../base/09-promesas";

describe('pruebas promesas', () => {
   
    test('should return hero async', () => {
        const heroId = 1;
        getHeroeByIdAsync( heroId ).then( (hero) => {
            console.log(hero);
        });
        
    })
    


});
