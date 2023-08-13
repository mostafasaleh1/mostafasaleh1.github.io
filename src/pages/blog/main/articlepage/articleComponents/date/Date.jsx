import React from 'react';
import "./date.css"

const Date = ({children}) => {
    return (
        <p className='article-date'>- {children} -</p>
    )
}

export default Date;