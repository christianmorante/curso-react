import React from 'react'

export const GifItem = ( {id, title, url} ) => {
    //console.log(props);    
    return (
        <div className="giftcard animate__animated animate__fadeIn">
            <img src={ url} alt={title} />
            <p>{ title }</p>
        </div>
    )
}
