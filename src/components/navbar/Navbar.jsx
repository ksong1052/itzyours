import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo2.png';
import { auth } from '../../firebase/firebase.utils';

const Navbar = ({ currentUser }) => {
  return (
    <div className='navbar'>
      <Link to="/" className='logoContainer'>
        <img src={Logo} alt="" className="logo" />
      </Link> 
      <div className="options">
        <Link to="/shop" className='option'>
          SHOP
        </Link>
        <Link to="/shop" className='option'>
          CONTACT
        </Link>
        {
          currentUser ?
          <div className='option' onClick={() => auth.signOut()}> SIGN OUT </div>
          :
          <Link to="/signin" className='option'>
            LOGIN/REGISTER
          </Link>
        }
      </div>
    </div>
  )
}

export default Navbar
