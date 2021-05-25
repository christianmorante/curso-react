import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruebas en desestructuracion', () => {
    test('should return a string and a number', () => {
        const [letras, numeros] = retornaArreglo();
        //expect( arr ).toEqual( ['ABC', 123] );
        expect( letras ).toBe('ABC');
        expect( typeof letras).toBe('string');
        
    })
    
})
