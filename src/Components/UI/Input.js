import React from "react";
// Import Styles
import Styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={Styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input id={props.input.id} ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
