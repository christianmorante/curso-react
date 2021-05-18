
describe('pruebas en demo.test.js', () => {
    test('should be string equals', () => {
        // Init
        const mensaje = 'Hola Mundo';
    
        // estimulo
        const mensaje2 = `Hola Mundo`;
    
        //3 observar el comportmiento
        expect( mensaje).toBe( mensaje2 );
        
    })
});













// test( 'firstTestMustBeTrue', () => {
//     // Arrange - Act - Assert
//     const isActive = true;
    
//     if ( isActive ) {
//         throw new Error('no esta activo');
//     }
// } );