import React, { useState } from 'react';

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState( 'Hola mundo' );

    const handleInputChange = ( event ) => {
        setInputValue( event.target.value );
    }

    const handleSubmit = ( event ) => {
        event.preventDefault();
        console.log("Submit hecho");
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue } 
                onChange={ handleInputChange }
            />
        </form>
    )
};
