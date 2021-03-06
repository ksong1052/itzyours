import React from 'react';
import './cartItem.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className='cartItem'>
      <img src={imageUrl} alt="item" />
      <div className="itemDetails">
        <span className="name">{name}</span>
        <span className="price">{quantity} * ${price}</span>
      </div>
    </div>
  )
}

export default CartItem
