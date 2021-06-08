import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({ x:0, y:0 })

    const {x, y } = coords;

    useEffect(() => {
        const mousemove = (e) => {
            const coords = { x:e.x, y: e.y };
            //console.log(coords);
            setCoords(coords);
            //console.log(':-)');
        }
        

        window.addEventListener('mousemove', mousemove);
        
        console.log('componente montado');

        return () => {
            console.log('componente desmontado');
            window.removeEventListener('mousemove', mousemove);
        }
    },[])

    return (
        <div>
            <h3>Eres Genial!</h3>
            <p>x: { x } y: { y }</p>
        </div>
    )
}
