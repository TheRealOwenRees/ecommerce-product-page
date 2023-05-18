export const handleShoppingCart = (
  shoppingCart,
  shoppingCartTotalItems,
  showCart,
  setShowCart
) => {
  setShowCart(!showCart);
};

export const handleHamburgerOpen = (setHamburgerOpen) => {
  setHamburgerOpen(true);
};

export const handleHamburgerClose = (setHamburgerOpen) => {
  setHamburgerOpen(false);
};
