import React from "react";
import Styles from "./Cart.module.css";
import Modal from "../UI/Modal";

// DUMMY
const CART_ITEMS = [
  {
    id: "c1",
    name: "sushi",
    price: 29.99,
  },
];

const Cart = (props) => {
  const cartItems = (
    <ul className={Styles["cart-items"]}>
      {CART_ITEMS.map((items, index) => (
        <li key={index}>{items.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={Styles.total}>
        <span>Total Amount</span>
        <span>20.99</span>
      </div>
      <div className={Styles.actions}>
        <button className={Styles["button--alt"]}>Close</button>
        <button className={Styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
