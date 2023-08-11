import React from 'react';
import "./lists.css";

const OrderedList = ({ children, range }) => {
    const childrenText = children.split("///");
    return (
        <div className='article-list-container'>
            <ol>
                {childrenText.map(line => <li>{line}</li>)}
            </ol>
        </div>
    )
}

export default OrderedList;