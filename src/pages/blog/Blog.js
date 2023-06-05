import React from 'react';
import { Posts } from './main/Exports';
import "./blog.css";

const Blog = () => {
    return (
        <section>
            <h2 className="heading">My <span>Blog</span></h2>
            <Posts />
        </section>
    )
}

export default Blog;