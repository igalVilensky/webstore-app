/* import Data from "../data.json"; */
import { useState, useContext } from "react";
import { Store, StoreContext } from "./context";

function Test() {
  const store = useContext(StoreContext);
  const [search, setSearch] = useState("");
  let newArr = store.data.filter((val) => {
    if (search == "") {
      return val;
    } else if (val.productName.toLowerCase().includes(search.toLowerCase())) {
      return val;
    }
  });
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      ></input>
      <div>{newArr}</div>
    </div>
  );
}

/*   return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearch(event.target.value);
          
        }}
      ></input>


      {store.data
        .filter((val) => {
          if (search == "") {
            return val;
          } else if (
            val.productName.toLowerCase().includes(search.toLowerCase())
          ) {
            return val;
          }
        })
        .map((val, key) => {
          return (
            <div>
              {" "}
              <p>{val}</p>
            </div>
          );
        })}
    </div>
  );
} */

export default Test;
