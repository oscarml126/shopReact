import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  const addToCartWithSessionStorage = (productId) => {
    addToCart(productId);
    const cartItemsFromSessionStorage = JSON.parse(sessionStorage.getItem("cartItems")) || {};
    cartItemsFromSessionStorage[productId] = (cartItemsFromSessionStorage[productId] || 0) + 1;
    sessionStorage.setItem("cartItems", JSON.stringify(cartItemsFromSessionStorage));
  };

  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCartWithSessionStorage(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
