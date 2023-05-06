import React from "react";
// Import Style
import Styles from "./HeaderCartButton.module.css";
// Import Icon
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button className={Styles.button} onClick={props.onClick}>
      <span className={Styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={Styles.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
