import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string'

describe('Tests 02-template-strings.js', ()=> {
    test('getSaludo debe saludar', () => {

        const nombre = 'Fernando';

        const saludo = getSaludo(nombre);
        console.log(saludo);

        expect( saludo ).toBe( 'Hola '+nombre +'!');

    });

    test('debe saludar si envio vacio', () => {
        const saludo = getSaludo();
        console.log(saludo);
        expect(saludo).toBe( 'Hola Carlos!' );
    })
    
});