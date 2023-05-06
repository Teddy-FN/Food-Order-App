import React from "react";
// Import Components
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
// Import data dummy
import { DUMMY_MEALS } from "../../Utils/constans";
// Import Styles
import Styles from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  // Mapping Data
  const mealsList = DUMMY_MEALS.map((items, index) => (
    <MealItem
      id={items.id}
      key={items.id}
      name={items.name}
      price={items.price}
      description={items.description}
    />
  ));
  return (
    <section className={Styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
