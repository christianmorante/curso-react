import { getImagen } from "../../base/11-async-await"

describe('Pruebas con async-await', () => {
    

    test('should return url image', async() => {
        const url = await getImagen();
        expect( typeof url ).toBe('string');

    });
    
});
