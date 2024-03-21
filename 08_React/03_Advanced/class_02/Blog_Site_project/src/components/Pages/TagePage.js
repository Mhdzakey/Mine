import React from 'react'
import Header from '../Header'
import {useNavigate, useLocation} from 'react-router-dom'
import Blog from '../Blog';
import Pagination from '../Pagination';

const TagePage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    return (
    <div>
        <Header/>
         <div>
            <button onClick={() => navigation(-1)}>
                Back
            </button>
         <h2>
            Blogs Tagged <span>#{tag}</span>
         </h2>
         </div>
         <Blog/>
         <Pagination/>
    </div>
  )
}

export default TagePage