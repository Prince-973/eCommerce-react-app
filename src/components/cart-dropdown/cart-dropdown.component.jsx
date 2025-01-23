import React, { useContext } from "react";
import "./cart-dropdown.style.scss";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
function CartDropdown() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="empty-message">your cart is empty</span>
        )}
      </div>
      <Button>CheckOut</Button>
    </div>
  );
}

export default CartDropdown;
