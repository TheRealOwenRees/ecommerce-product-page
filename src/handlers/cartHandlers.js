export const handleCheckout = () => {
  console.log("checkout clicked");
};

export const handleDeleteItem = (setShoppingCart) => {
  setShoppingCart([]);
};

export const handleAddToCart = (
  product,
  count,
  shoppingCart,
  setShoppingCart
) => {
  const totalPrice = product.price * count;
  setShoppingCart(
    shoppingCart.concat({
      item: product.name,
      price: product.price,
      quantity: count,
      totalPrice: totalPrice,
    })
  );
};
