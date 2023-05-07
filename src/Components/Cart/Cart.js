import { useContext } from "react";
import React from "react";
import Styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../Store/Card-Context";

const Cart = (props) => {
  const context = useContext(CartContext);
  console.log("context =>", context);

  const totalAmount = `$${context.totalAmount.toFixed(2)}`;
  const hasItems = context.items.length > 0;

  const cartItemsRemoveHandler = (id) => {
    context.removeItems(id);
  };

  const cartItemsAddHandler = (items) => {
    context.addItems({ ...items, amount: 1 });
  };

  const cartItems = (
    <ul className={Styles["cart-items"]}>
      {context.items.map((items) => (
        <CartItem
          key={items.id}
          name={items.name}
          amount={items.amount}
          price={items.price}
          onRemove={cartItemsRemoveHandler.bind(null, items.id)}
          onAdd={cartItemsAddHandler.bind(null, items)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.hideCartHandler}>
      {cartItems}
      <div className={Styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={Styles.actions}>
        <button
          className={Styles["button--alt"]}
          onClick={props.hideCartHandler}
        >
          Close
        </button>
        {hasItems && <button className={Styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
