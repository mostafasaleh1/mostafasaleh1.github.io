import React from 'react';
import { isRTL, onlyText_RTL } from '../../../../../../languages/language/RTL';
import "./h.css";

const H2 = ({ children, textCenter }) => {
    return (
        <div className='article-h2'>
            <h2 className={`${isRTL() ? onlyText_RTL() : null}`} style={textCenter ? {textAlign: "center"} : null}>{children}</h2>
        </div>
    )
}

export default H2;