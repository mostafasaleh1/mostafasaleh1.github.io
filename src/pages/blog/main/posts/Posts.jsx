import React from 'react';
import Post from './Post';
import { image1 } from '../../assets/Exports';
import { th1 } from '../Thumbnails';
import { useTranslation } from 'react-i18next';
import i18n from "../../../../i18n";
import "./posts.css";

const Posts = () => {
    const articlePath = (number) => {
        return `/blog/a${number}/`;
    }

    const activeLang = () => {
        if (i18n.language === 'ar') {
            return `AR_`;
        }
        else if (i18n.language === "ru") {
            return `RU_`;
        }
        else if (i18n.language === "en") {
            return `EN_`;
        }
        else if (i18n.language === "de") {
            return `DE_`;
        }
    }

    const { t } = useTranslation("articles");
    return (
        <React.Fragment>
            <Post
                title={t(`${activeLang()}a1.articleTitle`)}
                date={t(`${activeLang()}a1.date`)}
                articleSnippet={t(`${activeLang()}a1.p1`) + t(`${activeLang()}a1.p2`) + t(`${activeLang()}a1.p3`)}
                thumbnailPath={th1}
                articleLink={articlePath("1")}
                shareLink="#"
            />
            
            <Post
                title={t(`${activeLang()}a2.articleTitle`)}
                date={t(`${activeLang()}a2.date`)}
                articleSnippet={t(`${activeLang()}a2.p1`) + t(`${activeLang()}a2.p2`) + t(`${activeLang()}a2.p3`)}
                thumbnailPath={image1}
                articleLink={articlePath("2")}
                shareLink="#"
            />
        </React.Fragment>
    )
}

export default Posts