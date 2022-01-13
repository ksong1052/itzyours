import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.action';

import './cartIcon.scss';
import CartImg from '../../images/shoppingBag.svg';

const CartIcon = ({toggleCart}) => {
  return (
    <div className='cartIcon' onClick={toggleCart}>
      <img src={CartImg} alt="" width="30px" height="30px" className='shoppingIcon'/>
      <div className="counter">0</div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCartHidden())
})

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);
