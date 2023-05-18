import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [shoppingCartTotalItems, setShoppingCartTotalItems] = useState(0);
  const [shoppingCartTotalPrice, setShoppingCartTotalPrice] = useState(0);

  useEffect(() => {
    const cartTotalItems = shoppingCart.reduce((acc, cv) => {
      return acc + cv.quantity;
    }, 0);
    setShoppingCartTotalItems(cartTotalItems);
  }, [shoppingCart]);

  useEffect(() => {
    const cartTotalPrice = shoppingCart.reduce((acc, cv) => {
      return acc + cv.totalPrice;
    }, 0);
    setShoppingCartTotalPrice(cartTotalPrice);
  }, [shoppingCart]);

  return (
    <CartContext.Provider
      value={{
        shoppingCart,
        setShoppingCart,
        shoppingCartTotalItems,
        setShoppingCartTotalItems,
        shoppingCartTotalPrice,
        setShoppingCartTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
