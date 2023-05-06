import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
// Import Style
import Styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  // REF Amount
  const amountRef = useRef();

  // State Error
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountRef.current.value;
    const enteredAmountNumb = +enteredAmount;

    // VALIDATION
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 0 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToChart(enteredAmountNumb);
  };
  return (
    <form className={Styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter amount valid (1 - 5)</p>}
    </form>
  );
};

export default MealItemForm;
