import React, {useState} from "react";

import './App.css';

function App() {
  
  const fruits=[
    "Banana","Apple", "Orange","Mango","Pineapple","Watermelon"
  ];

  const [filterList, setFilterList]= useState(fruits);

  const handleSearch = (event) => {

    if (event.target.value ==="") {
      setFilterList(fruits);
      return;
    }
    
    const filtredList = fruits.filter((item)=>
    item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filtredList);
    return;
    
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      
      <div>
        <input name="query" type="text" placeholder="Search..." onChange={handleSearch} />
             
      </div>
      
      {
        filterList.map((item) => (
          <div>{item}</div> //Display each item
        ))}
    
    </div>
  );
}
   


export default App;
