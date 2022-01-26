import React, { useState } from 'react';

const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon ball'];
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon ball']);

    const handleAdd = () => {
        const newCategories = [...categories, 'Doraemon'];
        setCategories(newCategories);
    }


    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <button onClick={ handleAdd }>Agregar</button>

            <ol>
                {   
                    categories.map( (category, idx) => {
                        return <li key={ category }> { category } </li>
                    })
                }
            </ol>
        </>
    );

}

export default GifExpertApp;