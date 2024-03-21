import React from 'react'
import './App.css'
import Home from './components/Pages/Home'
import BlogPage from './components/Pages/BlogPage'
import TagePage from './components/Pages/TagePage'
import CategoryPage from './components/Pages/CategoryPage'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'
import { useEffect } from 'react'
import {Routes, Route, useSearchParams, useLocation} from 'react-router-dom'


   



const App = () => {
  const {fetchBlogPosts} = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  
  const location = useLocation();

  useEffect(()=>{
    const page = searchParams.get("page") ?? 1;
    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPosts(Number(page), tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPosts(Number(page), null, category);
    }
    else{
      
      fetchBlogPosts(Number(page));
    }
  },[location.pathname, location.search]);
  return (
     <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/blog/:blogID' element= {<BlogPage/>} />
      <Route path='/tag/:tag' element= {<TagePage/>} />
      <Route path='/categories/:category' element= {<CategoryPage/>} />
     </Routes>

    )
}

export default App