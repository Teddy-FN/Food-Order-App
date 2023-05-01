import React from "react";
import MealItemForm from "./MealItemForm";
// Import Styles
import Styles from "./MealItem.module.css";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={Styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={Styles.description}>{props.description}</div>
        <div className={Styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
