import React from 'react';
import { isRTL, onlyText_RTL } from '../../../../../../languages/language/RTL';
import "./lists.css";

const OrderedListExtraPadding = ({ children }) => {
    const childrenText = children.split("///");
    return (
        <div className={`article-list-extra-padding-container ${isRTL() ? onlyText_RTL() : null}`}>
            <ol style={isRTL() ? {direction: "rtl"} : null}>
                {childrenText.map(line => <li style={{textAlign: isRTL() ? "right" : 'left'}}>{line}</li>)}
            </ol>
        </div>
    )
}

export default OrderedListExtraPadding;