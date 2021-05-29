import { useEffect, useState } from "react"
import { getGifs } from "../helpers/GifHelpers";

export const useFetchGifs = ( category ) => {
    const [gifs, setGifs] = useState({
        data: [],
        loading: true
    });

    useEffect( () =>{
        getGifs( category ).then( gifs => {
            setTimeout( () => {
                setGifs({
                    data: gifs,
                    loading: false
                });
            }, 1500);
        });
    }, [category]);

    // useEffect( () => {
    //     getGifs( category )
    //         .then( gifs => setImages(gifs));
    // }, [ category ]);

    return gifs; // { data:[], loading: true };
}