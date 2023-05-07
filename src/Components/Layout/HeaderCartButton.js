import React, { useContext, useEffect, useState } from "react";
// Import Style
import Styles from "./HeaderCartButton.module.css";
// Import Icon
import CartIcon from "../Cart/CartIcon";
// Import Context
import CartContext from "../../Store/Card-Context";

const HeaderCartButton = (props) => {
  const context = useContext(CartContext);

  const [btnBump, setBtnBump] = useState(false);

  const badgeNumber = context?.items?.reduce((currNumb, items) => {
    return currNumb + items.amount;
  }, 0);

  const btnClasses = `${Styles.button} ${btnBump ? Styles.bump : ""}`;
  useEffect(() => {
    if (context.items.length === 0) {
      return;
    }

    const timers = setTimeout(() => {
      setBtnBump(false);
    }, 200);

    setBtnBump(true);

    return () => {
      clearTimeout(timers);
    };
  }, [context]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={Styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={Styles.badge}>{badgeNumber}</span>
    </button>
  );
};

export default HeaderCartButton;
