import { createSelector } from 'reselect';

// Input Selector
const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartItemCount = createSelector(
  [selectCartItems],
  cartItems => 
    cartItems.reduce(
      (totalQuantity, cartItem) => totalQuantity + cartItem.quantity, 
      0
    )
)

export const selectCartPriceTotal = createSelector(
  [selectCartItems],
  cartItems => 
    cartItems.reduce(
      (totalQuantity, cartItem) => totalQuantity + (cartItem.quantity * cartItem.price), 
      0
    )
)