import React from 'react';
import "./image.css";

const Image = ({ src, alt, description, size }) => {
    return (
        <div className='article-conent-image-container'>
            <img src={src} alt={alt} style={{height: `${size}`, width: `${size}`}} />
            <p>{description}</p>
        </div>
    )
}

export default Image;