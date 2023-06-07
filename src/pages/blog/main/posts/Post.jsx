import React from 'react';
import { Link } from 'react-router-dom';
import { BsShareFill } from "react-icons/bs";
import "./post.css";

const Post = ({title, date, articleSnippet, thumbnailPath, articleLink, shareLink}) => {
    return (
        <div className='blog-post'>
            <h2 className='blog-post-title'>{title}</h2>
            <span className="blog-post-date">{date}</span>
            <div className='blog-post-content-container'>
                <img src={thumbnailPath} alt="Img" />
                <div className='blog-post-snippet'>
                    {articleSnippet}
                    <a href={articleLink} className='blog-post-three-dots'> . . .</a>
                </div>
            </div>
            <div className='blog-post-links-container'>
                <a href={shareLink} className='blog-post-link'><BsShareFill /></a>
                <Link to={articleLink} className='blog-post-link btn'>Read More</Link>
            </div>
        </div>
    )
}

export default Post;