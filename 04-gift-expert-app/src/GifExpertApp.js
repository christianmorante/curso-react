import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifList } from './components/GifList';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['modern family']);

    // const handleAdd = () => {
    //     //setCategories( ['Nueva Categoria',...categories] );
    //     setCategories( cats => [...cats, 'Nueva Categoria']);
    // };

    return (
        <>
            <h2>Gif Expert App</h2>
            < AddCategory onSetCategories={ setCategories } />
            <hr />

            {/* <button onClick={ handleAdd } >Agregar</button> */}
            <ol>
                {
                    categories.map( cat => 
                        <GifList 
                            key= { cat }
                            category={ cat } />
                    )
                }
            </ol>
        </>
    )
}
