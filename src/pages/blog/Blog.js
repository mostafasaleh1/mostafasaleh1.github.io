import React from 'react';
import { Posts } from './main/Exports';
import { blogActiveLang } from '../../languages/language/ActiveLang';
import { useTranslation } from 'react-i18next';
import "./blog.css";

const Blog = () => {
    const { t } = useTranslation("blog");
    return (
        <section>
            <h2 className="heading">{t(`${blogActiveLang()}.myblog.my`)} <span>{t(`${blogActiveLang()}.myblog.blog`)}</span></h2>
            <Posts />
        </section>
    )
}

export default Blog;