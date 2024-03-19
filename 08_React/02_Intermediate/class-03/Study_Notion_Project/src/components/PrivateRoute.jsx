import React from 'react'
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({isLoogedIn, children}) => {
  if(isLoogedIn){
    return children;
  }
  else{
    return <Navigate to={"/"}/>
  }
}

export default PrivateRoute