import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';


describe('pruebas en 08-imp-exp', () => {
    
    test('should return an hero by ID', () => {
        const heroId = 1;
        const hero = getHeroeById( heroId );
        
        //console.log(hero);
        const heroeData = heroes.find( (heroe) => heroe.id === heroId );
        expect( hero ).toEqual( heroeData );
    });

    test('should return undefined', () => {
        const heroId = 10;
        const hero = getHeroeById( heroId );
        expect( hero ).toEqual( undefined );
    });

    test('should return DC heroes', () => {
        const owner = 'DC';
        const expectedHeroes = heroes.filter(x => x.owner === owner);
        const heoresByOwner = getHeroesByOwner(owner);

        expect( heoresByOwner ).toEqual( expectedHeroes );
    });

    test('should count 2 Marvel heroes', () => {
        const owner = 'Marvel';
        const heoresByOwner = getHeroesByOwner(owner);

        expect( heoresByOwner.length ).toBe( 2 );
    })
    
    
    
})
