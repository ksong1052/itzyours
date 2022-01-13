import React from 'react'
import './header.scss';
import Button from '@mui/material/Button';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import FaceIcon from '@mui/icons-material/Face';
import { Link } from "react-router-dom";
// import Logo from '../../images/logo.png';
import Shopping from '../../images/shopping.svg';
// import Cart from '../../images/cart.png';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import CartIcon from '../cartIcon/CartIcon';
import CartDropdown from '../cartDropdown/CartDropdown';

const Header = ({ currentUser,hidden }) => {
  return (
    <div className="header">
      <div className="item">
        <div className="callIcon">
          <Link to="/" className='listItemLink'>            
            <img src={Shopping} alt="" width="92" height="77" />
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
            {/* <Link to="/" 
              style={{textDecoration:"none", color:"black", fontSize:'25px'}}
            >Products</Link> */}
            <Link to="/" className='listItemLink'>            
              <Button size="large">PRODUCTS</Button>
            </Link>
          </li>
          {/* <img src={Logo} alt="" width="200px" height="89px" /> */}
          <li className="listItem">
            {/* <Link to="/shop" 
              style={{textDecoration:"none", color:"black", fontSize:'25px'}}
            >Shop</Link> */}
            <Link to="/shop" className='listItemLink'>            
              <Button size="large">SHOP</Button>
            </Link>
          </li>
          <li className="listItem">
            {/* <Link to="/" 
              style={{textDecoration:"none", color:"black", fontSize:'25px'}}
            >Contacts</Link>   */}
            <Link to="/" className='listItemLink'>            
              <Button size="large">CONTACTS</Button>
            </Link>
          </li>          
        </ul>
      </div>
      <div className="item">
        {/* <div className="cart">
          <Link to="/login" style={{textDecoration: 'none'}}>
            <button className="btn">Login</button>
          </Link>
          <Link to="/register" style={{textDecoration: 'none'}}>
            <button className="btn">Register</button>
          </Link>
          <img src={Cart} alt="" width="30px" height="30px" />
          <div className="counter">2</div>
        </div> */}        
        {
          currentUser ?
          <div className="cart">
            <div onClick={() => auth.signOut()}> 
              <Button variant="text" size="large">SIGN OUT</Button>              
            </div>
            <CartIcon className="cartIcon"/>
          </div>
          :
          <div className="cart">
            <Link to="/login" style={{textDecoration: 'none'}}>
              {/* <button className="btn">Login</button> */}
              {/* <Button variant="contained">Login</Button> */}
              <Button variant="contained" size="large" startIcon={<FaceIcon />}>LOGIN</Button>
            </Link>
            <Link to="/register" style={{textDecoration: 'none'}}>
              {/* <button className="btn">Register</button> */}
              {/* <Button variant="contained">Register</Button> */}
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

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
});

export default connect(
  mapStateToProps
)(Header);

