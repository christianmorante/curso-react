//import React, { Fragment } from 'react'
import React from 'react'


// Functional Components - FC
// const PrimeraApp = () => {
//     return ( 
//         <Fragment>
//             <h1>Hola Mundo</h1>
//             <p>Primeros pasos con React JS</p>
//         </Fragment>
//     );
// }

const PrimeraApp = ({ saludo = 'Hola Mundo default' }) => {
    console.log(saludo);
    return ( 
        <>
            <h1>{ saludo }</h1>
            {/* <h1>{ JSON.stringify(saludo, null, 3) }</h1> */}
            <p>Primeros pasos con React JS</p>
        </>
    );
}

export default PrimeraApp;




//const saludo = 123;
//const saludo = [1,2,3,6,9];
// const saludo = {
//     nombre:'Christian',
//     edad: 34
// };