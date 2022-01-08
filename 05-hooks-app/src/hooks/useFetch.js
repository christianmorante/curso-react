import { useEffect, useState } from 'react';



export const useFetch = ( url ) => {
    const [state, setState] = useState({data: null, loading: null, error: null})
    
    useEffect(() => {

        setState( {data: null, loading:true, error: null} );
        
        fetch( url )
            .then( resp => resp.json())
            .then( data => {
                //console.log('useFetchRes', data)
                setState({
                    loading: false,
                    error: null,
                    data
                });
            })
        
    }, [ url ]);

    return state;
    
}
