import React from "react";
import "./cart-dropdown.style.scss";
import Button from "../button/button.component";
function CartDropdown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>CheckOut</Button>
    </div>
  );
}

export default CartDropdown;
