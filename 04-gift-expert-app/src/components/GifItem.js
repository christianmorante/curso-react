import React from 'react'

export const GifItem = ( {id, title, url} ) => {
    //console.log(props);    
    return (
        <div className="giftcard">
            <img src={ url} alt={title} />
            <p>{ title }</p>
        </div>
    )
}
