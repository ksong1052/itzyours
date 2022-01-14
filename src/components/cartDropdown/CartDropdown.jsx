import React from 'react';
import './cartDropdown.scss';
import Button from '@mui/material/Button';
import PaymentIcon from '@mui/icons-material/Payment';
import { connect } from 'react-redux';
import CartItem from '../cartItem/CartItem';

const CartDropdown = ({cartItems}) => {
  return (
    <div className='cartDropdown'>
      <div className="cartItems">
        {
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        }  
      </div> 
      <Button variant="contained" size="medium" startIcon={<PaymentIcon />}>CHECK OUT</Button>
    </div>
  )
}

// const mapStateToProps = state => ({
//   cartItems: state.cart.cartItems  
// })

const mapStateToProps = ({ cart: { cartItems }}) => ({
  cartItems
})

export default connect(
  mapStateToProps
)(CartDropdown)
