import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Dashbord from './pages/Dashbord'
import PrivateRoute from './components/PrivateRoute'
const App = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    
    <div className='w-screen  h-screen bg-black flex flex-col'>
      <Navbar  isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>}/>
        <Route path="/login" element={<Login setIsLoggedIn ={setIsLoggedIn}/>}/>
        <Route path="/signup" element={<SignUp setIsLoggedIn ={setIsLoggedIn}/>}/>
        <Route path="/dashboard" element={
        <PrivateRoute isLoggedIn = {isLoggedIn}>

          <Dashbord/>
        </PrivateRoute>
        
        }/>
      </Routes>
    </div>
  )
}

export default App