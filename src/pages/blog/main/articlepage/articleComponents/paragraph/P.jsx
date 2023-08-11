import React from 'react';
import "./p.css";

const P = ({children, textCenter, underline}) => {
    return (
        <p className='article-paragraph' style={textCenter ? {textAlign: "center"} : null}>{children}</p>
    )
}

export default P;