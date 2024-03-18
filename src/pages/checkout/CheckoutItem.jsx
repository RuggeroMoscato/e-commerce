import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
export const CheckoutItem = (props) => {
  const { cartItems } = useContext(ShopContext);
  const { productName, price, id } = props.data;
  return (
    <div className="CheckoutItem">
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <p> x{cartItems[id]}</p>
      </div>
    </div>
  );
};
