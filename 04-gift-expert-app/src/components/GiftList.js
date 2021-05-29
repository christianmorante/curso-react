import React, { useState, useEffect } from 'react';

export const GiftList = ({ category }) => {

    const [count, setCount] = useState(0);

    useEffect( () => {
        getGifs();
    }, []);
    
    const getGifs = async() => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${ category }&api_key=w5WMiAVIzy43geFknvNlz0h5b0lVeSz8&limit=20`;
        const resp = await fetch( url );
        const { data } = await resp.json();

        //console.log(data);

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });

        console.log(gifs);

    };

    return (
        <div>
            <h3>{ category }</h3>
            <h3>{ count }</h3>
            <button onClick={ () => setCount( count + 1) }>+1</button>
            
        </div>
    )
}
