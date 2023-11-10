import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const getCartItemCountFromSessionStorage = () => {
    const cartItemsFromSessionStorage = JSON.parse(sessionStorage.getItem("cartItems")) || {};
    const itemCount = Object.values(cartItemsFromSessionStorage).reduce((acc, curr) => acc + curr, 0);
    setCartItemCount(itemCount);
  };
  useEffect(() => {
    getCartItemCountFromSessionStorage();
    window.addEventListener("storage", getCartItemCountFromSessionStorage);
    return () => {
      window.removeEventListener("storage", getCartItemCountFromSessionStorage);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
          <span className="cartItemCount">{cartItemCount}</span>
        </Link>
      </div>
    </div>
  );
};
