import React from 'react';
import { isRTL, RTL } from '../../../../../../languages/language/RTL';
import "./lists.css";

const UnorderedListExtraPadding = ({ children, listStyleHidden }) => {
    const childrenText = children.split("///");
    return (
        <div className={`article-list-extra-padding-container ${isRTL() ? RTL() : null}`} style={listStyleHidden ? {listStyle: "none"} : null}>
            <ul style={{ listStyleType: listStyleHidden ? "none" : null, direction: isRTL() ? "rtl" : null}}>
                {childrenText.map(line => <li>{line}</li>)}
            </ul>
        </div>
    )
}

export default UnorderedListExtraPadding;