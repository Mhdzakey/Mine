import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Dashbord from './pages/Dashbord'
const App = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(true);
  return (
    
    <div>
      <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn ={setIsLoggedIn}/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/dashboard" element={<Dashbord/>}/>
      </Routes>
    </div>
  )
}

export default App