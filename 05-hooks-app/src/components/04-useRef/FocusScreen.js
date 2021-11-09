import React, { useRef } from 'react'

export const FocusScreen = () => {

    const ref = useRef();

    const handleClick = () => {
        document.querySelector('input').select(); //.focus();
    };

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            <input className="form-control" placeholder="Nombre" />
            <button className="btn btn-outline-primary"
                    onClick={ handleClick }>
                Focus
            </button>
        </div>
    )
}
