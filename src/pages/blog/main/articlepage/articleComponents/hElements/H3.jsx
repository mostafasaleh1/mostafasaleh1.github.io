import React from 'react';
import { isRTL, onlyText_RTL } from '../../../../../../languages/language/RTL';
import "./h.css";

const H3 = ({ children, textCenter }) => {
    return (
        <div className='article-h3'>
            <h3 className={`${isRTL() ? onlyText_RTL() : null}`} style={textCenter ? {textAlign: "center"} : null}>{children}</h3>
        </div>
    )
}

export default H3;