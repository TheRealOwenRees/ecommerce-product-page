import { CartContextProvider } from "./context/CartContext.jsx";
import Navbar from "./components/partials/Navbar.jsx";
import Home from "./components/pages/Home.jsx";
import { useState } from "react";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="grid-container">
      <CartContextProvider>
        <Navbar showCart={showCart} setShowCart={setShowCart} />
        <Home showCart={showCart} />
      </CartContextProvider>
    </div>
  );
};

export default App;
