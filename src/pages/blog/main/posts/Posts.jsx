import React from 'react';
import Post from './Post';
import { image1 } from '../../assets/Exports';
import "./posts.css";

const Posts = () => {
    return (
        <div>
            <Post
                title="Mostafa Saleh"
                date="-10 aug 2022-"
                articleSnippet="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum aspernatur eveniet tempore. Illum accusamus molestiae laudantium beatae possimus magni itaque nam provident suscipit ex illo dicta pariatur architecto omnis temporibus, aliquid vitae quisquam perspiciatis modi nostrum, obcaecati ut. Delectus facere suscipit dicta culpa, dolores quisquam corrupti accusamus quasi iste soluta enim tempora voluptate alias deleniti natus aliquam! Ad aperiam, ratione eos illo nemo ex animi fugit doloremque quod? Libero, alias inventore dignissimos porro ipsa velit. Non laborum nemo culpa facilis, ea quasi et debitis aspernatur beatae similique nesciunt, pariatur ut dolores odit repudiandae. Doloribus nemo accusamus veniam iure nulla nisi."
                thumbnailPath={image1}
                articleLink="#"
                shareLink="#"
            />
        </div>
    )
}

export default Posts