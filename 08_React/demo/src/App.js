import './App.css';
import Cards from './components/Cards';
import ItemDate from './components/ItemDate';
import Items from './components/Items';

function App() {
  const response = [
    {itemName:"1",
    itemDay :"1",
    itemMonth: "1",
  itemYear: "1"},
  {itemName:"2",
    itemDay :"2",
    itemMonth: "2",
  itemYear: "2"},
  {itemName:"3",
    itemDay :"3",
    itemMonth: "3",
  itemYear: "3"},
  ]
  return (
    <Cards>
      <div className="App">
     <Items name={response[0].itemName}>First ITem Name</Items>
      <ItemDate day = {response[0].itemDay} month = {response[0].itemMonth} year = {response[0].itemYear} ></ItemDate>
     <Items name={response[1].itemName}></Items>
      <ItemDate day = {response[1].itemDay} month = {response[1].itemMonth} year = {response[1].itemYear} ></ItemDate>
     <Items name={response[2].itemName}></Items>
      <ItemDate day = {response[2].itemDay} month = {response[2].itemMonth} year = {response[2].itemYear} ></ItemDate>
     Hello React
    </div>
    </Cards>
  );
}

export default App;
