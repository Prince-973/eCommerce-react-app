import React, { useContext } from "react";
import "./cart-dropdown.style.scss";
import Button from "../button/button.component";
// import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
function CartDropdown() {
  // const { cartItems } = useContext(CartContext);

  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const goToCheckoutHandlar = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="empty-message">your cart is empty</span>
        )}
      </div>
      <Button onClick={goToCheckoutHandlar}>CheckOut</Button>
    </div>
  );
}

export default CartDropdown;
