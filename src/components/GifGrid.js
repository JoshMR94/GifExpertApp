import React from 'react';
import { useState, useEffect } from 'react/cjs/react.development';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs();
    }, []);
    

    const getGifs = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=prueba&limit=10&api_key=f8gkO4xzC5KGG0sxSlXaPbw0lLGCmqJm';
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });

        //This logic is not correct at the moment.
        console.log(gifs);
        setImages( gifs );
    }

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                { 
                    images.map( img => { 
                        return <GifGridItem
                            key={ img.id } 
                            { ...img }
                        />
                    })
                }
            </div>
        </>
        
    ) 
};
