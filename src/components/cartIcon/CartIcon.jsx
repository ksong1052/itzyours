import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemCount } from '../../redux/cart/cart.selector';

import './cartIcon.scss';
import CartImg from '../../images/shoppingBag.svg';

const CartIcon = ({ toggleCart, itemCount }) => {
  return (
    <div className='cartIcon' onClick={toggleCart}>
      <img src={CartImg} alt="" width="30px" height="30px" className='shoppingIcon'/>
      <div className="counter">{itemCount}</div>
    </div>
  )
}

// 1.
// const mapStateToProps = ({ cart: {cartItems} }) => ({
//   // ⭐ count가 변경될 때마다 rerendering이 되기 때문에 이 부분을 고려해야한다. 
//   // redux는 rerendering에 대해 신경쓰지 않는다. 단지 value만 신경 쓴다.
//   // 이 부분을 해결하기 위해 "reselect" 라이브러리를 이용한다. 
  
//   itemCount: cartItems.reduce(
//     (totalQuantity, cartItem) => totalQuantity + cartItem.quantity, 
//     0
//   )
// })

//2.
// const mapStateToProps = state => ({
//   itemCount: selectCartItemCount(state)
// })

//3.
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount
})


const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCartHidden())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
