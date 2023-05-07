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
    const newTotalAmount =
      state.totalAmount + action.items.price * action.items.amount;

    const existingCartItemsIndex = state.items.findIndex(
      (items) => items.id === action.items.id
    );

    const existingCartItems = state.items[existingCartItemsIndex];
    let updateItems;

    if (existingCartItems) {
      const updateItem = {
        ...existingCartItems,
        amount: existingCartItems.amount + action.items.amount,
      };
      updateItems = [...state.items];
      updateItems[existingCartItemsIndex] = updateItem;
    } else {
      updateItems = state.items.concat(action.items);
    }

    return {
      items: updateItems,
      totalAmount: newTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemsIndex = state.items.findIndex(
      (items) => items.id === action.id
    );

    const existingCartItems = state.items[existingCartItemsIndex];
    const updatedAmount = state.totalAmount - existingCartItems.price;
    let updateItem;
    if (existingCartItems.amount === 1) {
      // Remove if cart amount is 1
      updateItem = state.items.filter((items) => items.id !== action.id);
    } else {
      // Updated Amount
      const updateItems = {
        ...existingCartItems,
        amount: existingCartItems.amount - 1,
      };
      updateItem = [...state.items];
      updateItem[existingCartItemsIndex] = updateItems;
    }

    return {
      items: updateItem,
      totalAmount: updatedAmount,
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
