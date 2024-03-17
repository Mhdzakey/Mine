import React from 'react'
import {useNavigate} from 'react-router-dom'
const Support = () => {
    let navigate = useNavigate();
  function naviHandler(){
    navigate("/about")
  }
    return (
    <div>Support
        <button onClick={naviHandler}>Move To About Page</button>
    </div>
  )
}

export default Support