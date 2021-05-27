//import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';


describe('pruebas en PrimeraApp', () => {

    // test('should show message Hola soy Goku', () => {
    //     const saludo ='Hola soy Goku2';
    //     const { getByText } = render( <PrimeraApp saludo={ saludo } /> );
    //     expect( getByText(saludo) ).toBeInTheDocument();
    // })

    test('should show PrimeraApp ok', () => {

        const saludo ='Hola soy Goku2';
        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> )
        expect( wrapper ).toMatchSnapshot();
    })
    
})
