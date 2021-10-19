import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css'

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name:'',
        email:'',
        password:''
    });
    
    const { name, email, password } = formValues;

    useEffect(() => {
        console.log('email cambió en useEffect')
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    };


    return (
        <>
            <form onSubmit={ handleSubmit }>
                <h1>Form with CustomHook</h1>
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
                
                <div className="form-group mt-2">
                    <input type="text"
                        name="email"
                        className="form-control"
                        placeholder="email@gamil.com"
                        autoComplete="off"
                        value={ email }
                        onChange={ handleInputChange }
                    />
                </div>
                
                <div className="form-group mt-2">
                    <input type="password"
                        name="password"
                        className="form-control"
                        placeholder="****"
                        value={ password }
                        onChange={ handleInputChange }
                    />
                </div>

                <button type="submit" className="btn btn-primary mt-2">
                    Guardar
                </button>
            </form>
            <p className="mt-5">Custom Hook para manejar el formulario y su estado</p>
            <pre className="bg-dark text-white">
                {
                    `
                    export const useForm = (initialState = {}) => {
                        const [formValues, setFormValues] = useState(initialState)
                        
                        const handleInputChange = ( {target} ) => {
                            setFormValues({
                                ...formValues,
                                [target.name]: target.value
                            });
                        };
                        return [ formValues, handleInputChange];
                    }
                    `
                }
            </pre>
        </>
    )
}
