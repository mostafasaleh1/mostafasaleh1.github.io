import React from 'react';
import "./lists.css";

const OrderedListExtraPadding = ({ children }) => {
    const childrenText = children.split("///");
    return (
        <div className='article-list-extra-padding-container'>
            <ol>
                {childrenText.map(line => <li>{line}</li>)}
            </ol>
        </div>
    )
}

export default OrderedListExtraPadding;