import React from "react";
import "./product-card.style.scss";
import Button from "../button/button.component";

import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";
// import CartItem from "../cart-item/cart-item.component";
function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  // const { addItemToCart } = useContext(CartContext);
  // const addItemToCart = useSelector(selectCartItems);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  );
}

export default ProductCard;
