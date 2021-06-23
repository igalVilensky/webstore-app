import { useState, useContext } from "react";
/* import ProductList from "./ProductList"; */

import { Store, StoreContext } from "../../src/components/context";
function Search() {
  const store = useContext(StoreContext);
  const [userInput, setUserInput] = useState("");
  const [data, setData] = useState(Store.data);
  /* const [filteredData, setFilteredData] = useState([]); */

  const changeHandle = (e) => {
    setUserInput(e.target.value);
  };
  const submitHandle = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={submitHandle}>
        <input type="text" onChange={changeHandle} value={userInput}></input>
        <input type="submit" value="filter"></input>
      </form>
      {store.map((val, key) => {
        return <div>{val.id}</div>;
      })}

      {/*  <ProductList data={userInput ? filteredData : store.data} /> */}
    </div>
  );
}

export default Search;
