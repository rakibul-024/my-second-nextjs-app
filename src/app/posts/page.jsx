import React from 'react';
import Post from '../components/post';

const postData = async () => {

    const res= await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();


    return (
        <div>
            <h2>Posts Page: {posts.length}</h2>

            <div className="grid grid-cols-3 gap-4 ">
                {
                    // posts.map(post => <Post key= {post.id} > post={post} </Post>)
                    posts.map(post => <Post className="card card-dash bg-base-300 " key= {post.id} post={post} />)
                }
            </div>
        </div>
    );
};

export default postData;