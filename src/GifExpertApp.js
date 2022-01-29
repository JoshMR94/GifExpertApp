import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon ball']);

    /* const handleAdd = () => {
        const newCategories = [...categories, 'Doraemon'];
        setCategories(newCategories);
    } */


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory />
            <hr />
            
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