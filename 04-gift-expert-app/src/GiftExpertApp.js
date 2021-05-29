import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Samuari X', 'Dragon Ball']);

    const handleAdd = () => {

        //setCategories( ['Nueva Categoria',...categories] );
        setCategories( cats => [...cats, 'Nueva Categoria']);
        
    };

    return (
        <>
            <h2>GiftExpertApp</h2>
            < AddCategory />
            <hr />

            <button onClick={ handleAdd } >Agregar</button>
            <ol>
                {
                    categories.map( cat => {
                        return <li key={cat}>{ cat }</li>
                    })
                }
            </ol>
        </>
    )
}
