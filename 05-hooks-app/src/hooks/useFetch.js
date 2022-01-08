import { useEffect, useRef, useState } from 'react';


export const useFetch = ( url ) => {
    const [state, setState] = useState({data: null, loading: null, error: null})
    
    const compIsMounted = useRef(true);
    
    useEffect(() => {
        return () => {
            compIsMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setState( {data: null, loading:true, error: null} );
        
        fetch( url )
            .then( resp => resp.json())
            .then( data => {
                //console.log('useFetchRes', data)
                if ( compIsMounted.current ) {
                    setState({ loading: false, error: null, data });
                }
                else
                    console.log("setState no se llamó");
            })
        
    }, [ url ]);

    return state;
    
}
