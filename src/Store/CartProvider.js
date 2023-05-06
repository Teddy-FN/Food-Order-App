import { useReducer } from "react";
import CartContext from "./Card-Context";

// Default State
const defaultState = {
  items: [],
  totalAmount: 0,
};

// Reducer
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateItems = state.items.concat(action.items);
    const newTotalAmount =
      state.totalAmount + action.items.price * action.items.amount;
    return {
      items: updateItems,
      totalAmount: newTotalAmount,
    };
  }
  return defaultState;
};

// Provider
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);

  const addItems = (items) => {
    dispatchCartAction({ type: "ADD", items: items });
  };

  const removeItems = (removeItems) => {
    dispatchCartAction({ type: "REMOVE", id: removeItems });
  };

  const cartContext = {
    items: cartState?.items,
    totalAmount: cartState?.totalAmount,
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
