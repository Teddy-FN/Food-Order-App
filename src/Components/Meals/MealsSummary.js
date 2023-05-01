import React from "react";
// Import Style
import Styles from "./MealsSummary.module.css";

const MealsSummary = (props) => {
  return (
    <section className={Styles.summary}>
      <h2>Delicious Food, Delivered to you</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        all our meals are cooked with high-quality ingridients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
