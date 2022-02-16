import React from 'react'
import './header.scss';
import Button from '@mui/material/Button';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import FaceIcon from '@mui/icons-material/Face';
import { Link } from "react-router-dom";
import Logo from '../../images/coollogo4.png';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartIcon from '../cartIcon/CartIcon';
import CartDropdown from '../cartDropdown/CartDropdown';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.action';

const Header = ({ history, currentUser, hidden, toggleCart, signOutStart }) => {

  function SignOutHandler(e) {
    // Sign-out할 때 check-out창이 열려 있으면 창을 먼저 닫아 주고 logout
    if(hidden === false) { 
      toggleCart(); 
    }

    // logout시에 home page로 이동
    // navigate("/"); 
    history.push('/')

    // firebase로 부터 로그아웃
    //auth.signOut();    
    signOutStart();      
  }

  return (
    <div className="header">
      <div className="item">
        <div className="callIcon">
          <Link to="/" className='listItemLink'>            
            <img src={Logo} alt="" width="100" height="45" />
          </Link>          
        </div>
      </div>
      <div className="item">
        <ul className="list">
          <li className="listItem">
            <Link to="/" className='listItemLink'>      
              <Button size="large">HOME</Button>
            </Link>
          </li>
          <li className="listItem">
            <Link to="/" className='listItemLink'>            
              <Button size="large">PRODUCTS</Button>
            </Link>
          </li>
          
          {
            currentUser ? 
              <li className="listItem">
                <Link to="/shop" className='listItemLink'>            
                  <Button size="large">SHOP</Button>
                </Link>
              </li>
            :
            ""
          }
          
          <li className="listItem">
            <Link to="/contact" className='listItemLink'>            
              <Button size="large">CONTACTS</Button>
            </Link>
          </li>          
        </ul>
      </div>
      <div className="item">   
        {
          currentUser ?
          <div className="cart">            
            <div onClick={SignOutHandler}> 
              <Button variant="text" size="large">SIGN OUT</Button>              
            </div>
            <CartIcon className="cartIcon"/>
          </div>
          :
          <div className="cart">
            <Link to="/login" style={{textDecoration: 'none'}}>
              <Button variant="contained" size="large" startIcon={<FaceIcon />}>LOGIN</Button>
            </Link>
            <Link to="/register" style={{textDecoration: 'none'}}>
              <Button variant="contained" size="large" startIcon={<HowToRegIcon />}>REGISTER</Button>
            </Link>            
          </div>          
        }        

        {
          hidden ? null : <CartDropdown />
        }        

      </div> 
    </div>
  )
}

// ⭐ state: rootReducer를 가리킴
// store에 있는 state를 현 위치의 component에 "currentUser"으로 전달
// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser
// });
// 1.
// const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
//   currentUser,
//   hidden
// });

// 2.
// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state)
// });

// 3.
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCartHidden()),
  signOutStart: () => dispatch(signOutStart())
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));

