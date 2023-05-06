import React, { useContext } from "react";
// Import Style
import Styles from "./HeaderCartButton.module.css";
// Import Icon
import CartIcon from "../Cart/CartIcon";
// Import Context
import CartContext from "../../Store/Card-Context";

const HeaderCartButton = (props) => {
  const context = useContext(CartContext);

  const badgeNumber = context.items.reduce((currNumb, items) => {
    return currNumb + items;
  }, 0);

  return (
    <button className={Styles.button} onClick={props.onClick}>
      <span className={Styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={Styles.badge}>{badgeNumber}</span>
    </button>
  );
};

export default HeaderCartButton;
