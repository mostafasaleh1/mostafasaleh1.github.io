import React from 'react';
import { isRTL, onlyText_RTL } from '../../../../../../languages/language/RTL';
import "./lists.css";

const OrderedList = ({ children }) => {
    const childrenText = children.split("///");
    return (
        <div className={`article-list-container ${isRTL() ? onlyText_RTL() : null}`}>
            <ol style={isRTL() ? {direction: "rtl"} : null}>
                {childrenText.map(line => <li>{line}</li>)}
            </ol>
        </div>
    )
}

export default OrderedList;