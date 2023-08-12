import React from 'react';
import { isRTL, onlyText_RTL } from '../../../../../../languages/language/RTL';
import "./h.css";

const H4 = ({ children, textCenter }) => {
    return (
        <div className='article-h4'>
            <h4 className={`${isRTL() ? onlyText_RTL() : null}`} style={textCenter ? {textAlign: "center"} : null}>{children}</h4>
        </div>
    )
}

export default H4;