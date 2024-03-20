import React from 'react';
import Spinner from './Spinner'; // Import Spinner component
import Cards from './Cards'; // Import Cards component
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';


function Blog() {
    const {posts, loading} = useContext(AppContext)
  console.log(posts);
    return (
    <div>
      {loading ? (
        <Spinner/>
      ) : (
        posts.length === 0 ? (
          <div>
            <p>No posts available</p>
          </div>
        ) : (
          posts.map((post, index) => (
            <div key={post.id}>
              <p>{post.title}</p>
              <p>
                By <span>
                  {post.author}
                </span>
                on
                <span>
                  {post.category}
                </span>
                </p> 
                <p>Posted on {post.date}</p>
                <p>{post.content}</p>
                <div>
                  {post.tags.map((tag, index) => {
                    return <span key={index}>{`#${tag}`}</span>
                  })}
                </div>
              
            </div>
          ))
        )
      )}
    </div>
  );
}

export default Blog;
