import React from 'react';
import { Posts } from './main/Exports';
import { blogActiveLang } from '../../languages/language/ActiveLang';
import { useTranslation } from 'react-i18next';
import Footer from '../../Main/footer/Footer';
import "./blog.css";

const Blog = () => {
    const { t } = useTranslation("blog");
    return (
        <React.Fragment>
            <section>
                <h2 className="heading">{t(`${blogActiveLang()}.myblog.my`)} <span>{t(`${blogActiveLang()}.myblog.blog`)}</span></h2>
                <Posts />
            </section>
            <Footer />
        </React.Fragment>
    )
}

export default Blog;