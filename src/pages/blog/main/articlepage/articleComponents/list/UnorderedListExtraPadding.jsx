import React from 'react';
import { isRTL } from '../../../../../../languages/language/RTL';
import "./lists.css";

const UnorderedListExtraPadding = ({ children, listStyleHidden }) => {
    const childrenText = children.split("///");
    return (
        <div className={`article-list-extra-padding-container`} style={listStyleHidden ? {listStyle: "none"} : null}>
            <ul style={{ listStyleType: listStyleHidden ? "none" : null, direction: isRTL() ? "rtl" : null}}>
                {childrenText.map(line => <li style={{textAlign: isRTL() ? "right" : 'left'}}>{line}</li>)}
            </ul>
        </div>
    )
}

export default UnorderedListExtraPadding;