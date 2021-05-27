import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('pruebas promesas', () => {
   
    test('should return hero async', ( done ) => {
        const heroId = 1;
        getHeroeByIdAsync( heroId ).then( hero => {
            //console.log(hero);
            expect( hero ).toEqual(heroes[0]);
            done();
        });
        
    });

    test('should return error', (done) => {
        const heroId = 10;
        getHeroeByIdAsync( heroId )
            .catch( error => {
                expect( error ).toBe('No se pudo encontrar el héroe');
                done();
            });
    })
    
    


});
