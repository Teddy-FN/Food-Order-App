import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../Store/Card-Context";
// Import Styles
import Styles from "./MealItem.module.css";

const MealItem = (props) => {
  const context = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const addToChartHandler = (amount) => {
    context.addItems({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={Styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={Styles.description}>{props.description}</div>
        <div className={Styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToChart={addToChartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
