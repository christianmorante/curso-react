import { useState } from "react"


export const useCounter = ( initialState = 10 ) => {
    const [counter, setCounter] = useState(initialState);

    const increment = () => {
        setCounter(counter + 1 );
    };
    
    const decrement = () => {
        if ( counter > 0)
            setCounter(counter - 1);
    };

    const reset = () => {
        setCounter(initialState);
    };

    return {
        counter,
        increment,
        decrement,
        reset
    };
}

// const increment = ( factor = 1 ) => {
    //     setState(state + factor );
    // };
    // const decrement = (factor = 1) => {
    //     if ( state > 0)
    //         setState(state - factor);
    // };