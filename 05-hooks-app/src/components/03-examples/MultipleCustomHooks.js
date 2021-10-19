import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {

    const {counter, increment } = useCounter(29);

    const { loading, data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
    //console.log( loading );
    //console.log( data );

    //const { quote, author } = (data && data[0] != null) ? data[0] : { autor: '', data:undefined };
    const { quote, author } = (!!data && data.length >0) && data[0];
    //console.log( author, quote );
    
    return (
        <div>
            <h1>Custom hooks!!</h1>
            <br />

            <h3>BreakingBad Quotes</h3>
            {
                loading ? (
                    
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                )
                : (
                    <blockquote className="blockquote text-start">
                        <p className="mb-2">{ quote }</p>
                        <footer className="blockquote-footer">{ author }</footer>
                    </blockquote>
                )
            }

            <button onClick={ increment } className="btn btn-primary">Next Quote</button>

            
        </div>
    )
}
