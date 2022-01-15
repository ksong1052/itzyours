import React from 'react';
import './cartDropdown.scss';
import Button from '@mui/material/Button';
import PaymentIcon from '@mui/icons-material/Payment';
import { connect } from 'react-redux';
import CartItem from '../cartItem/CartItem';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden, selectCartItems } from '../../redux/cart/cart.selector';
import { useNavigate } from 'react-router-dom';

const CartDropdown = ({ cartItems, hidden, toggleCart }) => {
  const navigate = useNavigate();

  function checkOutHandler(e) {
    if(hidden === false) {
      toggleCart(); 
    }

    navigate("/checkout")
  }

  return (
    <div className='cartDropdown'>
      <div className="cartItems">
        {
          cartItems.length ? 
            cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          :
            <span className="emptyMessage">Your cart is empty</span>
        }  
      </div> 
      <Button 
        variant="contained" 
        size="medium" 
        startIcon={<PaymentIcon />}
        className="checkOut"
        onClick={checkOutHandler}
      >
        CHECK OUT
      </Button>    
    </div>
  )
}

// const mapStateToProps = state => ({
//   cartItems: state.cart.cartItems  
// })

//   // ⭐ cartItems가 변경될 때마다 rerendering이 되기 때문에 이 부분을 고려해야한다. 
//   // redux는 rerendering에 대해 신경쓰지 않는다. 단지 value만 신경 쓴다.
//   // 이 부분을 해결하기 위해 "reselect" 라이브러리를 이용한다. 
//1.
// const mapStateToProps = ({ cart: { cartItems }}) => ({
//   cartItems
// })

//2.
// const mapStateToProps = state => ({
//   cartItems: selectCartItems(state)
// })

//3.
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCartHidden())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartDropdown);
