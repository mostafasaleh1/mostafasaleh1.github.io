import React from 'react';
import { isRTL } from '../../../../../../languages/language/RTL';
import "./h.css";

const H2 = ({ children, textCenter }) => {
    return (
        <div className='article-h2'>
            <h2 style={{textAlign: isRTL() ? (textCenter ? "center" : "right") : "left"}}>{children}</h2>
        </div>
    )
}

export default H2;