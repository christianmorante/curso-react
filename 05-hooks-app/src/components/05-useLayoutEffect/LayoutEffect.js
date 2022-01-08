import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './LayoutEffect.css';

export const LayoutEffect = () => {

    const {counter, increment } = useCounter(1);
    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );

    const { quote } = (!!data && data.length > 0) && data[0];
    const refPara = useRef();
    const [refParaInfo, setRefParaInfo] = useState({});
    
    useLayoutEffect(() => {
      setRefParaInfo( refPara.current.getBoundingClientRect());
    }, [ quote ])

    return (
        <div>
            <h1>useLayoutEffect</h1>
            <hr />
            <h3>BreakingBad Quotes</h3>
            
            <blockquote className="blockquote text-start">
                <p ref={ refPara } className="mb-2">{ quote }</p>
            </blockquote>
            <button onClick={ increment } className="btn btn-primary">Next Quote</button>

            <pre>
              {
                JSON.stringify(refParaInfo, null, 3)
              }
            </pre>

            
        </div>
    )
}
