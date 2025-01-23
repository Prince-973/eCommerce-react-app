import React, { useContext } from "react";
import "./checkout.style.scss";
import { CartContext } from "../../contexts/cart.context";

import CheckOutItem from "../../components/checkout-item/checkout-item.component";
function CheckOut() {
  const { cartItems, cartTotal } = useContext(CartContext);
  // const totalPrice = cartItems.reduce((total, item) => {
  //   return total + item.price * item.quantity;
  // }, 0);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => {
        return <CheckOutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="total">Total: {cartTotal}</span>
    </div>
  );
}

export default CheckOut;
