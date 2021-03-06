import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        //document.querySelector('input').select(); //.focus();
        inputRef.current.select();
        console.log(inputRef);
    };

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            <input ref={ inputRef }
                className="form-control" placeholder="Nombre" />
            <button className="btn btn-outline-primary"
                    onClick={ handleClick }>
                Focus
            </button>
        </div>
    )
}
