import React from 'react';
import { isRTL } from '../../../../../../languages/language/RTL';
import "./lists.css";

const UnorderedList = ({ children, listStyleHidden }) => {
    const childrenText = children.split("///");
    return (
        <div className={`article-list-container`}>
            <ul style={{listStyleType: listStyleHidden ? "none" : null, paddingLeft: 0, paddingRight: 0, direction: isRTL() ? "rtl" : null}}>
                {childrenText.map(line => <li style={{textAlign: isRTL() ? "right" : 'left'}}>{line}</li>)}
            </ul>
        </div>
    )
}

export default UnorderedList;