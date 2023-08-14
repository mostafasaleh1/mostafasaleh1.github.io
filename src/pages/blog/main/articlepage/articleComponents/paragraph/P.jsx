import React from 'react';
import { isRTL } from './../../../../../../languages/language/RTL';
import "./p.css";

const P = ({ children, textCenter }) => {
    return (
        <p className={`article-paragraph`} style={{textAlign: isRTL() ? (textCenter ? "center" : "right") : "left"}}>{children}</p>
    )
}

export default P;