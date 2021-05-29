import React, { useState, useEffect } from 'react';
import { getGifs } from '../helpers/GifHelpers';
import { GifItem } from './GifItem';

export const GiftList = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs( category )
            .then( gifs => setImages(gifs));
    }, [ category ]);

    return (
        <>
            <h3>{ category }</h3>
            <div className="giftcard-grid">
                { 
                    images.map( img => 
                        <GifItem key={ img.id } {...img} />
                    )
                }
            </div>
        </>
    )
}
