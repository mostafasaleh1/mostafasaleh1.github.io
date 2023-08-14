import React from 'react';
import { isRTL } from '../../../../../../languages/language/RTL';
import "./h.css";

const H1 = ({ children, textCenter }) => {
    return (
        <div className='article-h1'>
            <h1 style={{textAlign: isRTL() ? (textCenter ? "center" : "right") : "left"}}>{children}</h1>
        </div>
    )
}

export default H1;