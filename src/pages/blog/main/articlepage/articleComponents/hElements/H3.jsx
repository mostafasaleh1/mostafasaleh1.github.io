import React from 'react';
import { isRTL } from '../../../../../../languages/language/RTL';
import "./h.css";

const H3 = ({ children, textCenter }) => {
    return (
        <div className='article-h3'>
            <h3 style={{textAlign: isRTL() ? (textCenter ? "center" : "right") : "left"}}>{children}</h3>
        </div>
    )
}

export default H3;