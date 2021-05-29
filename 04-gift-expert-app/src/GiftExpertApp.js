import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftList } from './components/GiftList';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['modern family']);

    // const handleAdd = () => {
    //     //setCategories( ['Nueva Categoria',...categories] );
    //     setCategories( cats => [...cats, 'Nueva Categoria']);
    // };

    return (
        <>
            <h2>Gift Expert App</h2>
            < AddCategory onSetCategories={ setCategories } />
            <hr />

            {/* <button onClick={ handleAdd } >Agregar</button> */}
            <ol>
                {
                    categories.map( cat => 
                        <GiftList 
                            key= { cat }
                            category={ cat } />
                    )
                }
            </ol>
        </>
    )
}
