import React, { useState } from 'react';
import Proptypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( event ) => {
        setInputValue( event.target.value );
    }

    const handleSubmit = ( event ) => {
        event.preventDefault();

        if ( inputValue.trim().length > 2) {
            //Importante. Mediante un callback hace uso de las categorías sin necesidad de ellas en este componente, ya que conserva su estado anterior
            setCategories( categories => [ inputValue, ...categories ]);
            setInputValue('');
        }

    }

    return (
        <form onSubmit={ handleSubmit }>
            <p> { inputValue } </p>
            <input 
                type="text"
                value={ inputValue } 
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: Proptypes.func.isRequired
}

export default AddCategory;
