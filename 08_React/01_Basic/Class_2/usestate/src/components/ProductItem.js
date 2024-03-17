import React , {useState} from 'react'
import Cards from './Cards'
import './ProductItem.css'
import ProductDate from './ProductDate'

const ProductItem = (props) => {
  const [title, setTitle] = useState(props.title);
  function clickHandler(){
    setTitle("Popcorn")
  }

  return ( 
    <Cards className= "product-item">
      <ProductDate date={props.date}/>
         <div className='product-item_description'>
            <h2>
             {title}
           </h2>
          </div>
          <button onClick={clickHandler}>Add to Cart</button>


    </Cards>
  );
}

export default ProductItem;