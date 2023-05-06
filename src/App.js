import React, { Fragment, useState } from "react";
// Components
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const [modalCartShown, setModalCartShown] = useState(false);

  const shownCartHandler = () => setModalCartShown(true);
  const hideShownCartHandler = () => setModalCartShown(false);

  return (
    <Fragment>
      {modalCartShown && <Cart hideCartHandler={hideShownCartHandler} />}
      <Header showCartModal={shownCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
