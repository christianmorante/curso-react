import React from 'react'
import PropTypes from 'prop-types';

//import React, { Fragment } from 'react'


// Functional Components - FC
// const PrimeraApp = () => {
//     return ( 
//         <Fragment>
//             <h1>Hola Mundo</h1>
//             <p>Primeros pasos con React JS</p>
//         </Fragment>
//     );
// }

//const PrimeraApp = ({ saludo = 'Hola Mundo default' }) => {
const PrimeraApp = ({ saludo }) => {
    
    
    return ( 
        <>
            <h1>{ saludo }</h1>
            {/* <h1>{ JSON.stringify(saludo, null, 3) }</h1> */}
            <p>Primeros pasos con React JS</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;