import React from "react";
import "./checkout.css";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import { PRODUCTS } from "../../products";
import { CheckoutItem } from "./CheckoutItem";
const Checkout = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <div className="checkoutPage">
      <div className="formContainer">
        <form action="post">
          <h1>Checkout</h1>
          <input type="address" placeholder="Indirizzo" />
          <input type="text" placeholder="codice postale" />
          <input type="name" placeholder="nome e cognome" />
          <input type="email" placeholder="email" />
          <input type="text" placeholder="stato" />

          <input type="città" placeholder="città" />
          <select name="metodo di pagamento">
            <option value=""> Seleziona</option>
            <option value="">Buono regalo</option>
            <option value="">Bancomat</option>
          </select>
          <button> procedi all'acquisto </button>
        </form>
      </div>
      <div className="CheckoutItemContainer">
        <div className="CheckoutItem">
          <div>
            <h1>Your Cart Items</h1>
          </div>
          <div className="CheckoutItemPage">
            {PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CheckoutItem data={product} />;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
