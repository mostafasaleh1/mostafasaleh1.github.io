import React from 'react';
import "./h.css";

const H1 = ({ children, textCenter }) => {
    return (
        <div className='article-h1'>
            <h1 style={textCenter ? {textAlign: "center"} : null}>{children}</h1>
        </div>
    )
}

export default H1;