// 같은 item이 추가 구매될 때 사용 될 로직 - 개수만 증가 시켜 줘야 한다.
export const addItemToCart = (cartItems, cartItemToAdd) => {
  // find(): 같은 값을 가진 item의 처음 것을 반환
  // filter(): 같은 값을 가진 item 모두를 Array로 반환
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
  
  // 같은 item을 이미 가지고 있을 때
  if(existingCartItem) {
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToAdd.id  
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // 같은 item이 없고, 새로운 item이 추가 될 때
  return [...cartItems, { ...cartItemToAdd, quantity: 1}];
};

// 같은 item에 대한 구매 개수를 감소 시킴 - CheckOut compunent에서 사용됨
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if(existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(
    cartItem => 
      cartItem.id === cartItemToRemove.id ?
      { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}