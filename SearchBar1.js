import React, { useState } from "react";

import "./App.css";

function App() {
  const fruits = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
  ];

  const [termSearch, setTermSearch] = useState("");

  return (
    <div className="App">
      <h1>Hello</h1>

      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setTermSearch(event.target.value);
        }}
      />

      {fruits
        .filter((val) => {
          if (termSearch == "") {
            return val;
          }

          if (val.toLowerCase().includes(termSearch.toLowerCase())) {
            return val;
          }
        })
        .map((item, key) => {
          return <div key={key}>{item}</div>;
        })}
    </div>
  );
}

export default App;
