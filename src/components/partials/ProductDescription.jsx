import cart from "../../assets/images/icon-cart.svg";
import minus from "../../assets/images/icon-minus.svg";
import plus from "../../assets/images/icon-plus.svg";

import { handleAddToCart } from "../../handlers/cartHandlers.js";
import { useCartContext } from "../../context/CartContext.jsx";
import { useState } from "react";

const ProductDescription = () => {
  const { shoppingCart, setShoppingCart } = useCartContext();
  const [count, setCount] = useState(1);
  const product = {
    name: "Fall Limited Edition Sneakers",
    price: 125,
  };

  return (
    <div className="product-description-wrapper">
      <div className="product-text">
        <p className="product-brand">SNEAKER COMPANY</p>
        <p className="product-heading">Fall Limited Edition Sneakers</p>
        <p className="product-description">
          These low profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="product-price">
        <div>
          <p className="price">
            $125.00 <span className="discount">50%</span>
          </p>
        </div>
        <div>
          <p className="old-price">$250.00</p>
        </div>
      </div>
      <div className="add-to-cart">
        <div className="add-item">
          <img
            src={minus}
            onClick={() => (count > 1 ? setCount(count - 1) : setCount(1))}
          />
          {count}
          <img src={plus} onClick={() => setCount(count + 1)} />
        </div>
        <div
          className="add-to-cart-button"
          onClick={() =>
            handleAddToCart(product, count, shoppingCart, setShoppingCart)
          }
        >
          <img className="cart" src={cart} />
          <p>Add to cart</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
