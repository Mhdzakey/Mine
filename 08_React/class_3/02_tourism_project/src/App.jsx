import { useState } from 'react'
import './App.css'
import { data } from './data'
import Tours  from './components/Tours'

function App() {
  
  const [tours,setTours] = useState(data)

  return (
   <div>
    <Tours>{tours}</Tours>
   </div>
  )
};

export default App
