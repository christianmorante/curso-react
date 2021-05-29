import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onSetCategories }) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    
    const handleSubmit = (e) => {
        //console.log('submit done', e);
        e.preventDefault();

        if(inputValue.trim().length > 2) {
          onSetCategories( cats => [inputValue, ...cats]);
          setInputValue('');
        }
    };

    const handleClearCategories = () => {
        onSetCategories([]);
        setInputValue('');
    };

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <input 
                    type="text"
                    value={ inputValue }
                    onChange={ handleInputChange }
                />
                <button type="button" onClick={ handleClearCategories } >Clear</button>
            </form>
        </>
    )
}

AddCategory.propTypes = {
    onSetCategories: PropTypes.func.isRequired
}
