import hamburger from "../../assets/images/icon-menu.svg";
import cart from "../../assets/images/icon-cart.svg";
import avatar from "../../assets/images/image-avatar.png";
import close from "../../assets/images/icon-close.svg";

import { useState } from "react";
import { useCartContext } from "../../context/CartContext.jsx";
import {
  handleHamburgerOpen,
  handleHamburgerClose,
  handleShoppingCart,
} from "../../handlers/navHandlers.js";

const Navbar = ({ showCart, setShowCart }) => {
  const { shoppingCart, shoppingCartTotalItems } = useCartContext();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const totalItems = () => {
    return <div className="total-items">{shoppingCartTotalItems}</div>;
  };

  return (
    <nav className="navbar">
      <div
        className={hamburgerOpen ? "hamburger-menu" : "hamburger-menu-closed"}
      >
        <img
          className="hamburger-close"
          src={close}
          onClick={() => handleHamburgerClose(setHamburgerOpen)}
        />
        <ul>
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="nav-items">
        <div className="hamburger">
          <img
            src={hamburger}
            onClick={() => handleHamburgerOpen(setHamburgerOpen)}
          />
        </div>
        <div className="nav-title">
          <h1>sneakers</h1>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="icons">
          <img
            src={cart}
            onClick={() =>
              handleShoppingCart(
                shoppingCart,
                shoppingCartTotalItems,
                showCart,
                setShowCart
              )
            }
          />
          <img src={avatar} />
          {shoppingCartTotalItems > 0 && totalItems()}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
