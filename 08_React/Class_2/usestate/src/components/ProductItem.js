import React from 'react'
import Cards from './Cards'
import './ProductItem.css'
import ProductDate from './ProductDate'

const ProductItem = (props) => {
  let title = props.title;

function clickHandler(){
  title = "Popcorn";
  console.log("Clicked Button");
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