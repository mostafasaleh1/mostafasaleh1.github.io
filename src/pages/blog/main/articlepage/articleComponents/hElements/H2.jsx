import React from 'react';
import "./h.css";

const H2 = ({ children, textCenter }) => {
    return (
        <div className='article-h2'>
            <h2 style={textCenter ? {textAlign: "center"} : null}>{children}</h2>
        </div>
    )
}

export default H2;