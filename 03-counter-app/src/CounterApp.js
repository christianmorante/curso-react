import React, { useState } from 'react'
import PropTypes from 'prop-types';

// usar snippet: rafcp
const CounterApp = ({ value }) => {


    // const [nombre, setNombre] = useState('Goku');
    // console.log(nombre);
    const [counter, setCounter] = useState(0);

    const handleAdd = (e) => {
        //counter++;
        setCounter(counter+1);
        //setCounter( (c) => c+1);
    };


    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd } >+1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;
