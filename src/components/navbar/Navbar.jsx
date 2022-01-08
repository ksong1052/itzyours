import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo2.png';

const Navbar = () => {
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
        <Link to="/shop" className='option'>
          LOGIN
        </Link>
      </div>
    </div>
  )
}

export default Navbar
