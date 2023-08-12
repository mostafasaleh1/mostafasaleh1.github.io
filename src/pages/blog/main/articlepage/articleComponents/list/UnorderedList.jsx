import React from 'react';
import { isRTL, onlyText_RTL } from '../../../../../../languages/language/RTL';
import "./lists.css";

const UnorderedList = ({ children, listStyleHidden }) => {
    const childrenText = children.split("///");
    return (
        <div className={`article-list-container ${isRTL() ? onlyText_RTL() : null}`}>
            <ul style={{listStyleType: listStyleHidden ? "none" : null, paddingLeft: 0, paddingRight: 0, direction: isRTL ? "rtl" : null}}>
                {childrenText.map(line => <li>{line}</li>)}
            </ul>
        </div>
    )
}

export default UnorderedList;