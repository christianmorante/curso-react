import React, { useEffect, useState } from 'react';
import './effects.css'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email:''
    });
    const { name, email } = formState;

    // solo se dispara una vez
    useEffect( () => {
        //console.log('hi')
    }, []);

    //solo cambia cuando cambie la dependencia: formState
    useEffect( () => {
        //console.log('formState Cambió')
    }, [formState]);

    useEffect( () => {
        //console.log('email Cambió')
    }, [email]);

    const handleInputChange = ( {target} ) => {
        //console.log(target.name);
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    };


    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input type="text"
                    name="name"
                    className="form-control"
                    placeholder="your name"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>
            <div className="form-group">
                <input type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gamil.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>
            <br />
        </>
    )
}
