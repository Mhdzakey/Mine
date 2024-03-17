import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json(); // save data into a variable
      const data = await output;
      setCourses(output.data);
      toast.success("SuccessFul Data Fetching");
    } catch (error) {
      toast.error("Somthing went wrong with network");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-500">
      <div>
        <Navbar />
      </div>
      <div className="bg-slate-500">
        <div>
          <Filter 
          filterData={filterData}
          category = {category}
          setCategory = {setCategory} />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? <Spinner /> : <Cards courses={courses} category = {category} />}
        </div>
      </div>
    </div>
  );
};

export default App;

// import React, { useEffect, useState } from 'react'
// import './index.css'

// function App(){
//   const [text, setText] = useState('');
//   const [name, setName] = useState("Zakey");

//   // //Varaition 1 -> Every Render  , Rendered Everytime after change in UI
//   // useEffect(() =>{
//   //   console.log("UI Rerendered Done");
//   // });

//   //Varaition 2 -> First Render, onetime after change in UI
//   // useEffect(() => {
//   //   console.log("UI Rerendered Done");
//   // }, []);
//   //Varaition 3 -> First Render + whenever dependecy change
//   // useEffect(() => {
//   //   console.log("UI Rerendered Done");
//   // }, [name]);

//   //variation 4 -> Use as a cleaning up;
//   useEffect(()=>{
//     console.log("listener Added");

//     return ()=>{
//       console.log("Listener Removed");
//     }

//   }, [text]);

//   function changeHandler(event) {
//     setText(event.target.value);
//     console.log(text);
//   }
//   return (
//     <div className="bg-slate-500 flex justify-center align-center border-collapse">
//       <input onChange={changeHandler} name="x"></input>
//     </div>
//   );
// }

// export default App
