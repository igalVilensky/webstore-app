import "./scss/main.scss";
import React, { useState } from "react";
import Data from "./data.json";
import { FaBeer } from "react-icons/fa";
import ProductList from "./components/ProductList";

function App() {
  const [data, setData] = useState(Data);
  const [userInput, setUserInput] = useState("");

  const changeHandle = (e) => {
    setUserInput(e.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <h1>Welcome to our online store</h1>
      <form onSubmit={submitHandle}>
        <input type="text" onChange={changeHandle} value={userInput}></input>
        <input type="submit" value="filter"></input>
      </form>
      <ProductList data={data} />
    </React.Fragment>
  );
}

export default App;
