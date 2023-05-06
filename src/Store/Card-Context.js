import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmout: 0,
  addItems: (items) => {},
  removeItems: (removeItems) => {},
});

export default CartContext;
