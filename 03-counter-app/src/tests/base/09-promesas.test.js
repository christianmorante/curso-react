import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('pruebas promesas', () => {
   
    test('should return hero async', ( done ) => {
        const heroId = 1;
        getHeroeByIdAsync( heroId ).then( hero => {
            //console.log(hero);
            expect( hero ).toEqual(heroes.find(h => h.id === heroId));
            done();
        });
        
    })
    


});
