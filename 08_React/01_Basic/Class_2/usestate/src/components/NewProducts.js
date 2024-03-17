import React from 'react'
import './NewProducts'
import ProductsForm from './ProductsForm'
const NewProducts = (props) => {

  function newProductChild(child){
    console.log("I am new product child");

    console.log(child);

    props.onParent(child);
  }

  return (
    <div className='new-product'>
        <ProductsForm onNewProductChild = {newProductChild}/>
    </div>
  )
}

export default NewProducts