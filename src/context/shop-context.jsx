import React, { useState } from "react";
import { createContext } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart;
  for (let i; i > PRODUCTS.lenght; i++) {
    cart[i] = 0;
  }
  return cart;
};
const addToCart = (itemID) => {
  setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
};
const removeFromCart = (itemID) => {
  setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
};
const contextValue = { cartItems, addToCart, removeFromCart };
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState();
  return <ShopContextProvider>{props.children}</ShopContextProvider>;
};
