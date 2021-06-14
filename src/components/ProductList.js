import React, { useState } from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ data }) => {
  const [cart, setCart] = useState([]);
  const [totalBill, setTotalBill] = useState(0);
  const addToCart = (item) => {
    setCart((prevStat) => [...prevStat, item]);
  };
  const items = data.map((item, i) => (
    <ProductItem key={i} info={item} addToCart={addToCart} />
  ));

  const bill = () =>
    setTotalBill(cart.reduce((acc, cur) => acc + cur.price, 0));
  return (
    <React.Fragment>
      <div>
        <button onClick={bill}>Total bill</button> <h6>{totalBill}€</h6>
      </div>
      <ul>{items}</ul>
    </React.Fragment>
  );
};
export default ProductList;
