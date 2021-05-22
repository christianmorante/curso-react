import '@testing-library/jest-dom';
import { getUser } from '../../base/05-funciones'

describe('Pruebas 05-funciones', () => {

    test('getUser debe retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        //console.log(user);
        expect(user).toEqual( userTest );
        
        
    });

    //getUsuarioActivo retorna objeto
    test('getUsuarioActivo retorna objeto', () => {
        
        const nombre = ''
        
    })
    


    
    
})
