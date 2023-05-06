import React from "react";
import Styles from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={Styles["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={Styles.summary}>
          <span className={Styles.price}>{price}</span>
          <span className={Styles.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={Styles.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
