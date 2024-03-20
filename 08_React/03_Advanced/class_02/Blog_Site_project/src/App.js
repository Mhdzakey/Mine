import React from 'react'
import Header from './components/Header'
import Blog from './components/Blog'
import Pagination from './components/Pagination'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'
import { useEffect } from 'react'
import './index.css'


const App = () => {
  const {fetchBlogPosts} = useContext(AppContext);

useEffect(()=>{
  fetchBlogPosts();
},[]);
  return (
    <div>
      <Header/>
      <Blog/>
      <Pagination/>
    </div>
  )
}

export default App