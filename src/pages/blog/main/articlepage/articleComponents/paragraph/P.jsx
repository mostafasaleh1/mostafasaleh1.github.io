import React from 'react';
import { isRTL, onlyText_RTL } from './../../../../../../languages/language/RTL';
import "./p.css";

const P = ({ children, textCenter }) => {
    return (
        <p className={`article-paragraph ${isRTL() ? onlyText_RTL() : null}`} style={textCenter ? { textAlign: "center" } : null}>{children}</p>
    )
}

export default P;