import React from 'react';
import Spinner from './Spinner'; 

import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import BlogDetails from './BlogDetails';


function Blog() {
    const {posts, loading} = useContext(AppContext)
  console.log(posts);
    return (
    <div className='w-11/12  max-w-[670px] mb-[230px] py-8 mt-[230px] flex flex-col h-screen justify-center items-center  gap-y-7'>
      {loading ? (
        <Spinner/>
      ) : (
        posts.length === 0 ? (
          <div >
            <p>No posts available</p>
          </div>
        ) : (
          posts.map((post, index) => (
            <BlogDetails key ={post.id} post={post}/>
          ))
        )
      )}
    </div>
  );
}

export default Blog;
