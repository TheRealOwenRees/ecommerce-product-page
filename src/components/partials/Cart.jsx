import { useCartContext } from "../../context/CartContext.jsx";
import {
  handleCheckout,
  handleDeleteItem,
} from "../../handlers/cartHandlers.js";

import product1Thumbnail from "../../assets/images/image-product-1-thumbnail.jpg";
import trashCan from "../../assets/images/icon-delete.svg";

const Cart = () => {
  const {
    shoppingCart,
    setShoppingCart,
    shoppingCartTotalItems,
    shoppingCartTotalPrice,
  } = useCartContext();

  const cartDetails = () => {
    if (shoppingCart.length === 0) {
      return (
        <div className="cart-empty">
          <p>Your cart is empty.</p>
        </div>
      );
    }
    return (
      <>
        <div className="cart-item">
          <img className="product-img" src={product1Thumbnail} />
          <p>
            Fall Limited Edition Sneakers <br /> $125 x {shoppingCartTotalItems}
            <span className="total">${shoppingCartTotalPrice}</span>
          </p>
          <img
            className="trashcan"
            src={trashCan}
            onClick={() => handleDeleteItem(setShoppingCart)}
          />
        </div>
        <div className="checkout-button" onClick={handleCheckout}>
          <p>Checkout</p>
        </div>
      </>
    );
  };

  return (
    <div className="cart-container">
      <div className="cart-title">
        <h3>Cart</h3>
      </div>
      <div className="cart-details">{cartDetails()}</div>
    </div>
  );
};

export default Cart;
