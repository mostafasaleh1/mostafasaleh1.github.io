import React from 'react';
import "./h.css";

const H4 = ({ children, textCenter }) => {
    return (
        <div className='article-h4'>
            <h4 style={textCenter ? {textAlign: "center"} : null}>{children}</h4>
        </div>
    )
}

export default H4;