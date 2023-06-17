import React from 'react';
import Post from './Post';
import { image1 } from '../../assets/Exports';
import { blogActiveLang } from '../../../../languages/language/ActiveLang';
import "./posts.css";
import { useTranslation } from 'react-i18next';

const Posts = () => {
    const { t } = useTranslation("blog");
    return (
        <React.Fragment>
            <Post
                title={t(`${blogActiveLang()}.post1.title`)}
                date={t(`${blogActiveLang()}.post1.date`)}
                articleSnippet={t(`${blogActiveLang()}.post1.content`)}
                thumbnailPath={image1}
                articleLink="/myprofile/blog/article/"
                shareLink="#"
            />
            
            <Post
                title={t(`${blogActiveLang()}.post2.title`)}
                date={t(`${blogActiveLang()}.post2.date`)}
                articleSnippet={t(`${blogActiveLang()}.post2.content`)}
                thumbnailPath={image1}
                articleLink="#"
                shareLink="#"
            />
        </React.Fragment>
    )
}

export default Posts