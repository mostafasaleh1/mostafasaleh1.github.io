import React from 'react';
import { Link } from 'react-router-dom';
import { BsShareFill } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
import { isRTL, RTL, onlyText_RTL } from './../../../../languages/language/RTL';
import { blogActiveLang } from '../../../../languages/language/ActiveLang';
import "./post.css";

const Post = ({ title, date, articleSnippet, thumbnailPath, articleLink, shareLink }) => {
    const { t } = useTranslation("blog");
    return (
        <div className="blog-post">
            <h2 className='blog-post-title'>{title}</h2>
            <span className="blog-post-date">- {date} -</span>
            <div className={`blog-post-content-container ${RTL()}`}>
                <img src={thumbnailPath} alt="Img" />
                <div className='blog-post-snippet' style={{textAlign: isRTL() ? "right" : "left"}}>
                    {articleSnippet}
                    <a href={articleLink} className={`blog-post-three-dots ${isRTL() ? "blog-post-three-dots-rtl" : "blog-post-three-dots-normal"}`}> . . .</a>
                </div>
            </div>
            <div className={`blog-post-links-container ${RTL()}`}>
                <a href={shareLink} className='blog-post-link'><BsShareFill /></a>
                <Link to={articleLink} className='blog-post-link btn'>{t(`${blogActiveLang()}.post.readmore`)}</Link>
            </div>
        </div>
    )
}

export default Post;