import React from 'react'
import { useCounter } from '../../hooks/useCounter';

//import './CounterApp.css';

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
            <p>Se crea al hook useCounter para administrar las funciones del contador</p>
            <pre className="bg-dark text-white">
                {
                    `
                    import { useState } from "react";
                    export const useCounter = ( initialState = 10 ) => {
                        const [state, setState] = useState(initialState);

                        const increment = ( factor = 1 ) => {
                            setState(state + factor );
                        };

                        const decrement = (factor = 1) => {
                            if ( state > 0)
                                setState(state - factor);
                        };

                        const reset = () => {
                            setState(initialState);
                        };

                        return {
                            state,
                            increment,
                            decrement,
                            reset
                        };
                    }
                    `
                }
            </pre>
        </div>
    );
}
