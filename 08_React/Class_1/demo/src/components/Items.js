import  './Items.css' 
import React from 'react'

const Items = (props) => {
  const itemName = props.name;
  return (
    <div className='nirma'>
      <p>{itemName}</p>
      {props.children}
    </div>
  )
}

export default Items