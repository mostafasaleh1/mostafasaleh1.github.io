import React from 'react';
import "./lists.css";

const UnorderedListExtraPadding = ({ children, listStyleHidden }) => {
    const childrenText = children.split("///");
    return (
        <div className='article-list-extra-padding-container' style={listStyleHidden ? {listStyle: "none"} : null}>
            <ul style={listStyleHidden ? {listStyleType: "none"} : null}>
                {childrenText.map(line => <li>{line}</li>)}
            </ul>
        </div>
    )
}

export default UnorderedListExtraPadding;