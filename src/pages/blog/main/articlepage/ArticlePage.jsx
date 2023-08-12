import React from 'react';
import Footer from './../../../../Main/footer/Footer';
import "./articlepage.css";

const ArticlePage = ({ children }) => {
    return (
        <React.Fragment>
            <section>
                <div className='article-container'>
                    {children}
                </div>
            </section>
            <Footer />
        </React.Fragment>
    )
}

export default ArticlePage;