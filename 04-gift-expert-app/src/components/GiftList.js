import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GiftList = ({ category }) => {
    // const [images, setImages] = useState([]);
    const { data:gifs, loading } = useFetchGifs( category );
    // useEffect( () => {
    //     getGifs( category )
    //         .then( gifs => setImages(gifs));
    // }, [ category ]);

    return (
        <>
            <h3>{ category }</h3>
            { loading && <p>Loading</p> }
            <div className="giftcard-grid">
                { 
                    gifs.map( img => 
                        <GifItem key={ img.id } {...img} />
                    )
                }
            </div>
        </>
    )
}
