import React, { useEffect, useState } from 'react'
import './App.css'
import './tailwind.css'; // Import Tailwind CSS
function App(){
  const [text, setText] = useState('');
  // const [name, setName] = useState("Zakey");
  
  // //Varaition 1 -> Every Render  , Rendered Everytime after change in UI
  // useEffect(() =>{
  //   console.log("UI Rerendered Done");
  // });

  //Varaition 2 -> First Render, onetime after change in UI
  // useEffect(() => {
  //   console.log("UI Rerendered Done");
  // }, []);
  //Varaition 3 -> First Render + whenever dependecy change
  // useEffect(() => {
  //   console.log("UI Rerendered Done");
  // }, [name]);

  //variation 4 -> Use as a cleaning up;
  // useEffect(()=>{
  //   console.log("listener Added");

  //   return ()=>{
  //     console.log("Listener Removed");
  //   }

  // });

  function changeHandler(event) {
    setText(event.target.value);
    console.log(text);
  }
  return (
    <div className="bg-slate-500   flex justify-center align-center border-collapse p-6">
      <input onClick={changeHandler} name="x"></input>
    </div>
  );
}

export default App