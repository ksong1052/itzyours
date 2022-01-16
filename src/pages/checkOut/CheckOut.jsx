import React from 'react';
import './checkOut.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartPriceTotal } from '../../redux/cart/cart.selector';
import CheckOutItem from '../../components/checkOutItem/CheckOutItem';


//https://mui.com/components/tables/#main-content - 테이블 참조

// const CheckOut = ({ cartItems, cartPriceTotal }) => {
//   return (
//     <div className='checkOutPage'>
//       <div className="checkOutHeader">
//         <div className="headerBlock">
//           <span>Product</span>
//         </div>
//         <div className="headerBlock">
//           <span>Description</span>
//         </div>
//         <div className="headerBlock">
//           <span>Quantity</span>
//         </div>
//         <div className="headerBlock">
//           <span>Price</span>
//         </div>
//         <div className="headerBlock">
//           <span>Remove</span>
//         </div>
//       </div>

//       <div className="checkOutList">
//       {
//         cartItems.map(cartItem => 
//           cartItem.name  
//         )
//       }
//       </div>      

//       <div className="total">
//         <span>TOTAL: ${cartPriceTotal}</span>        
//       </div>
//     </div>
//   )
// }

const CheckOut = ({ cartItems, cartPriceTotal }) => { 

  return (
    <div className='checkOutPage'>    
      <CheckOutItem cartItems={cartItems} cartPriceTotal={cartPriceTotal} />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartPriceTotal: selectCartPriceTotal
});

export default connect(
  mapStateToProps
)(CheckOut);
