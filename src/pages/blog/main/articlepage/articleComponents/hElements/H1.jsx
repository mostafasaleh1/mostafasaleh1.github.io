import React from 'react';
import { isRTL, onlyText_RTL } from '../../../../../../languages/language/RTL';
import "./h.css";

const H1 = ({ children, textCenter }) => {
    return (
        <div className='article-h1'>
            <h1 className={`${isRTL() ? onlyText_RTL() : null}`} style={textCenter ? {textAlign: "center"} : null}>{children}</h1>
        </div>
    )
}

export default H1;