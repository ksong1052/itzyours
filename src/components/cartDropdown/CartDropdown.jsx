import React from 'react';
import './cartDropdown.scss';
import Button from '@mui/material/Button';
import PaymentIcon from '@mui/icons-material/Payment';

const CartDropdown = () => {
  return (
    <div className='cartDropdown'>
      <div className="cartItem" /> 
      <Button variant="contained" size="large" startIcon={<PaymentIcon />}>CHECK OUT</Button>
    </div>
  )
}

export default CartDropdown
