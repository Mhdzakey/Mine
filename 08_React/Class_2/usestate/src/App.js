
import React from 'react';
import Products from './components/Products'
import './App.css';



const App = () => {
  const products = [
    {
      id: 'p1',
      title:'A',
      amount: 1,
      date: new Date(2021,1,1),

    },
    {
      id: 'p12',
      title:'B',
      amount: 2,
      date: new Date(2022,2,2),

    },
    {
      id: 'p3',
      title:'C',
      amount: 3,
      date: new Date(2023,3,3),

    },
    {
      id: 'p4',
      title:'D',
      amount: 4,
      date: new Date(2024,4,4),

    },
  ];
  return(
    <div className='app'>
      <Products item = {products}/>
    </div>
  );
}
export default App;
