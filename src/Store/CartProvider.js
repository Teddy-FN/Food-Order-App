import CartContext from "./Card-Context";

const CartProvider = (props) => {
  const addItems = (items) => {};

  const removeItems = (removeItems) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItems: addItems,
    removeItems: removeItems,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
