import React from 'react';
import "./articletitle.css";

const ArticleTitle = ({children}) => {
    return (
        <h1 className='article-title'>{children}</h1>
    )
}

export default ArticleTitle;