import React, { Fragment } from "react";
// Import Components
import HeaderCartButton from "./HeaderCartButton";
// Import Style
import Styles from "./Header.module.css";
// Import Img
import ImageMeal from "../../Assets/meals.jpeg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={Styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={Styles["main-image"]}>
        <img src={ImageMeal} alt="meals-img" />
      </div>
    </Fragment>
  );
};

export default Header;
