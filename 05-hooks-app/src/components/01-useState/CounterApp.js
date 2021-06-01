import React, { useState } from 'react';
import './CounterApp.css';

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20
    });

    console.log(counter);

    const handleCounter1 = (e) => {
        setCounter({
            ...counter,
            counter1: counter.counter1+1
        });
    };
    const handleCounter2 = (e) => {
        setCounter({
            ...counter,
            counter2: counter.counter2+1
        });
    };

    return (
        <>
            <h1>useState</h1><br />
            <h3>Counter1 <span className="badge bg-secondary">{ counter.counter1 }</span></h3>
            <h3>Counter2 <span className="badge bg-secondary">{ counter.counter2}</span></h3>
            <button className="btn btn-primary" onClick={ handleCounter1 }>
                Counter1 +1
            </button>
            <button className="btn btn-warning" onClick={ handleCounter2 }>
                Counter2 +1
            </button>
          <p>Se debe usar el operador spread para mantener el estado de las demas propiedades que no se van a afectar del objeto counter</p>
          <pre>
              {
                `
                const [counter, setCounter] = useState({
                    counter1: 10,
                    counter2: 20
                });
                const handleCounter1 = (e) => {
                    setCounter({
                        ...counter,
                        counter1: counter.counter1+1
                    });
                };
                const handleCounter2 = (e) => {
                    setCounter({
                        ...counter,
                        counter2: counter.counter2+1
                    });
                };
                `
              }
          </pre>

        </>
    )
}
