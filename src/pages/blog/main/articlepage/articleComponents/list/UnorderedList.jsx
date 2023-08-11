import React from 'react';
import "./lists.css";

const UnorderedList = ({ children, listStyleHidden }) => {
    const childrenText = children.split("///");
    return (
        <div className='article-list-container'>
            <ul style={listStyleHidden ? {listStyleType: "none", paddingLeft: 0} : null}>
                {childrenText.map(line => <li>{line}</li>)}
            </ul>
        </div>
    )
}

export default UnorderedList;