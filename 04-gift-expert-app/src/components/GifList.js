import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifList = ({ category }) => {
    // const [images, setImages] = useState([]);
    const { data:gifs, loading } = useFetchGifs( category );
    // useEffect( () => {
    //     getGifs( category )
    //         .then( gifs => setImages(gifs));
    // }, [ category ]);

    return (
        <>
            <h3 className="">{ category }</h3>
            { loading && <p className="animate__animated animate__flash">Loading</p> }
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
