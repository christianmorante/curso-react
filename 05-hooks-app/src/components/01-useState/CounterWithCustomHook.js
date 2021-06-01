import React from 'react'
import { useCounter } from '../../hooks/useCounter';

import './CounterApp.css';

export const CounterWithCustomHook = () => {
    const factor = 2;
    const { state: counter, increment, decrement, reset } = useCounter();


    return (
        <div>
            <h1>Counter with Hook: { counter }</h1>
            <hr />
            <button className="btn btn-primary" onClick={ () =>  increment(factor) } >+ { factor }</button>
            <button className="btn btn-danger" onClick={ reset } >Reset</button>
            <button className="btn btn-primary" onClick={ () => decrement(factor) } >- { factor }</button>
        </div>
    );
}
