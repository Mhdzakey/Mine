import React, { useContext, useEffect, useState } from 'react'
import {BrowserRouter,useNavigate, useLocation} from 'react-router-dom'
import Header from '../Header';
import { AppContext } from '../../context/AppContext';
const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/"
    const {loading, setLoading} = useContext(AppContext);
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBLogs] = useState([]);
  let  navigation = useNavigate();
  const location = useLocation();
  const blogId = location.pathname.split("/").at(-1);


    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId= ${blogId}`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedBLogs(data.relatedBlogs);
        } catch (error) {
            console.log("Error in fetching in blog id data");
            setBlog(null);
            setRelatedBLogs([]);
        }
        setLoading(false);
    }

    useEffect(()=>{
     if(blogId){
        fetchRelatedBlogs();
     }   
    },[location.pathname])
    return (
    <div>
        <Header/>
        <div>
            <button onClick={()=> navigation(-1)}>
                Back
            </button>
        </div>
        {
           loading ?
           (<div><p>Loading</p></div>):
           blog ? (
            <div><BlogDetails post={blog}/>
            <h2>Realted Blogs</h2>
           {
            realtedblogs.map((post) => {
                <div key={post.id}>
                    <BlogDetails post ={post}/>
                </div>
            })
           }
           </div>): 
           ( <div>
            <p>No Blog Found</p>
           </div>)
        }


    </div>
  )
}

export default BlogPage