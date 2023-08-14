import React from 'react';
import { isRTL } from '../../../../../../languages/language/RTL';
import "./h.css";

const H4 = ({ children, textCenter }) => {
    return (
        <div className='article-h4'>
            <h4 style={{textAlign: isRTL() ? (textCenter ? "center" : "right") : "left"}}>{children}</h4>
        </div>
    )
}

export default H4;