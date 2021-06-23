import React from "react";
import Data from "../../data.json";

const Store = {
  data: Data,
  cart: [],
  print: (str) => console.log(str),
  bill: function () {
    return this.cart.reduce((acc, cur) => acc + cur.price, 0);
  },
  addToCart: (item) => Store.cart.push(item),
  /* productFilter: () =>
    Store.data
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
            <p>{val.productName}</p>
          </div>
        );
      }), */
};

const StoreContext = React.createContext(Store);

export { Store, StoreContext };
