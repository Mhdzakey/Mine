import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner.jsx'
import Product from '../components/Product.jsx'

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);


  async function fetchProductData(){
    setLoading(true);
    try {
       const response = await fetch(API_URL);
       const data = await response.json();
       setPosts(data)
    } catch (error) {
      console.log("Error in fetching products data" );
      setPosts([]);

    }
    setLoading(false);
    
  }
  useEffect( ()=>{
    fetchProductData();

  },[]);
  return (
    <div>{
      <div>
      {
        loading ? <Spinner /> :
         posts.length > 0 ?
        (<div className='grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto 
        space-y-10 space-x-10 min-h-[80hv'>
        {
          posts.map((post) => (<Product key={post.id} post={post}/>)
        
        )}
        </div> 
        ):
        <div className="flex flex-col text-green-600 relative justify-center items-center ">
          <p className='underline'>Product Coming Soon</p>
        </div>
      }
    </div>
  
  
      }</div>
  )
   
};

export default Home;