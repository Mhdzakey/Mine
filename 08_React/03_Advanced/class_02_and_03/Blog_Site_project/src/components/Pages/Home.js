import React from 'react'
import Blog from '../Blog'
import Pagination from '../Pagination'
import Header from '../Header'

const Home = () => {
  return (
    <div>
        <Header/>
        <div className='flex justify-center items-center mx-8 px-[30px]'>
            <Blog/>
            <Pagination/>
        </div>
    </div>
  )
}
 
export default Home