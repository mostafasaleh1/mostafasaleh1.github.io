import React from 'react';
import Post from './Post';
import { image1 } from '../../assets/Exports';
import { th1 } from '../Thumbnails';
import { blogActiveLang } from '../../../../languages/language/ActiveLang';
import "./posts.css";
import { useTranslation } from 'react-i18next';

const Posts = () => {
    const articlePath = (number) => {
        return `/myprofile/blog/a${number}/`;
    }

    const { t } = useTranslation("blog");
    return (
        <React.Fragment>
            <Post
                title={t(`${blogActiveLang()}.post1.title`)}
                date={t(`${blogActiveLang()}.post1.date`)}
                articleSnippet={t(`${blogActiveLang()}.post1.content`)}
                thumbnailPath={th1}
                articleLink={articlePath("1")}
                shareLink="#"
            />
            
            <Post
                title={t(`${blogActiveLang()}.post2.title`)}
                date={t(`${blogActiveLang()}.post2.date`)}
                articleSnippet={t(`${blogActiveLang()}.post2.content`)}
                thumbnailPath={image1}
                articleLink={articlePath("2")}
                shareLink="#"
            />
        </React.Fragment>
    )
}

export default Posts