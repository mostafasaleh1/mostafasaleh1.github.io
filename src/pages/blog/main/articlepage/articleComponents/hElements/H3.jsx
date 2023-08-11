import React from 'react';
import "./h.css";

const H3 = ({ children, textCenter }) => {
    return (
        <div className='article-h3'>
            <h3 style={textCenter ? {textAlign: "center"} : null}>{children}</h3>
        </div>
    )
}

export default H3;