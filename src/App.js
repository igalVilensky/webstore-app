// import { useState } from "react";
// import { Store, StoreContext } from "./components/context/index";
import SearchBar from "./components/SearchBar";
import "./scss/main.scss";
import StoreData from "./data.json";

function App() {
  return (
    <div className="App">
      <h1>Online Store</h1>
      {console.log(StoreData)}
      <SearchBar placeholder="Search for products..." data={StoreData} />
    </div>
  );
}

export default App;
