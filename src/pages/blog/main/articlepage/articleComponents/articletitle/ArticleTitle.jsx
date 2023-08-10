import React from 'react';
import "./articletitle.css";

const ArticleTitle = ({content}) => {
    return (
        <h1 className='article-title'>{content}</h1>
    )
}

export default ArticleTitle;