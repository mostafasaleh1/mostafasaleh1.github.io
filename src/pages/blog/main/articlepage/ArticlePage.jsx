import React from 'react';
import Footer from './../../../../Main/footer/Footer';
import A1 from './articlescontent/a1/A1';
import "./articlepage.css";

const ArticlePage = () => {
    return (
        <React.Fragment>
            <section>
                <div className='article-container'>
                    <A1 />
                </div>
            </section>
            <Footer />
        </React.Fragment>
    )
}

export default ArticlePage;