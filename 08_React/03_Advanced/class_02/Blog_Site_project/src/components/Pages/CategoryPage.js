import React from 'react'
import Header from '../Header'
import {useLocation, useNavigate} from 'react-router-dom'
import Blog from '../Blog';
import Pagination from '../Pagination';
const CategoryPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
  return (
    <div>
        <Header/>
        <div className='flex justify-center items-center mx-4'>
            <button onClick={() => navigation(-1)}>
                Back
            </button>
            <h2>
                Blogs on <span>{category}</span>
            </h2>
        </div>
        <Blog/>
        <Pagination/>
    </div>
  )
}

export default CategoryPage
