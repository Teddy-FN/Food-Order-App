import React, { useState } from "react";
// Components
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [modalCartShown, setModalCartShown] = useState(false);

  const shownCartHandler = () => setModalCartShown(true);
  const hideShownCartHandler = () => setModalCartShown(false);

  return (
    <CartProvider>
      {modalCartShown && <Cart hideCartHandler={hideShownCartHandler} />}
      <Header showCartModal={shownCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
