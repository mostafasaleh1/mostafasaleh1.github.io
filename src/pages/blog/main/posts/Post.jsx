import React from 'react';
import { image1 } from '../../assets/Exports';
import { BsShareFill } from "react-icons/bs";
import "./post.css";

const Post = () => {
    return (
        <div className='blog-post'>
            <h2 className='blog-post-title'>Mostafa Saleh</h2>
            <span className="blog-post-date">10 aug 2022</span>
            <div className='blog-post-content-container'>
                <img src={image1} alt="test" />
                <div className='blog-post-snippet'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum aspernatur eveniet tempore. Illum accusamus molestiae laudantium beatae possimus magni itaque nam provident suscipit ex illo dicta pariatur architecto omnis temporibus, aliquid vitae quisquam perspiciatis modi nostrum, obcaecati ut. Delectus facere suscipit dicta culpa, dolores quisquam corrupti accusamus quasi iste soluta enim tempora voluptate alias deleniti natus aliquam! Ad aperiam, ratione eos illo nemo ex animi fugit doloremque quod? Libero, alias inventore dignissimos porro ipsa velit. Non laborum nemo culpa facilis, ea quasi et debitis aspernatur beatae similique nesciunt, pariatur ut dolores odit repudiandae. Doloribus nemo accusamus veniam iure nulla nisi.
                    <a href='#' className='blog-post-three-dots'> . . .</a>
                </div>
            </div>
            <div className='blog-post-links-container'>
                <a href='#' className='blog-post-link'><BsShareFill /></a>
                <a href='#' className='blog-post-link btn'>Read More</a>
            </div>
        </div>
    )
}

export default Post;