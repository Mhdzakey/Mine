import React, { useState } from 'react'
import './ProductsForm.css'

const ProductsForm = (props) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    function titleChangeHandler(event){
        setTitle(event.target.value);
    };
    function dateChangeHandler(event){
      
        setDate(event.target.value);
        console.log(event.target.value);
        
    };

    function submitHandler(event){
        event.preventDefault();
        
        const productData = {
            Title:title,
            Date:date
        }
        // console.log(productData);
        setTitle('');
        setDate('');

        props.onNewProductChild(productData)
    }
  return (
    <form className='product-form' onSubmit={submitHandler}>
        <div >
            <label>Title</label>
            <input type='text' value={title} onChange={titleChangeHandler}></input>
        </div>
        <div className='new-date'>
            <label>Date</label>
            <input type='date'  value={date} onChange={dateChangeHandler} min='2023-1-1' max='2023-12-12'></input>
        </div>
        <div className='form-btn'>
            <button type='submit'>
                Submit
            </button>
        </div>
    </form>
  )
}

export default ProductsForm