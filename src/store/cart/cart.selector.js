import { createSelector } from "reselect";

const selectCartREducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartREducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartREducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0)
);
