import React from 'react'
import './header.scss';
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import Shopping from '../../images/shopping.svg';
import Cart from '../../images/cart.png';

const Header = () => {
  return (
    <div className="header">
      <div className="item">
        {/* <div className="callIcon">
          <img src={Shopping} alt="" width="92" height="77" />
        </div> */}
      </div>
      <div className="item">
        <ul className="list">
          <li className="listItem">
            <Link to="/" 
              style={{textDecoration:"none", color:"white"}}
            >Home</Link>
          </li>
          <li className="listItem">
            <Link to="/" 
              style={{textDecoration:"none", color:"white"}}
            >Products</Link>
          </li>
          <img src={Logo} alt="" width="200px" height="89px" />
          <li className="listItem">
            <Link to="/" 
              style={{textDecoration:"none", color:"white"}}
            >Events</Link>
          </li>
          <li className="listItem">
            <Link to="/" 
              style={{textDecoration:"none", color:"white"}}
            >Contacts</Link>  
          </li>          
        </ul>
      </div>
      <div className="item">
        <div className="cart">
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn">Register</button>
          </Link>
          <img src={Cart} alt="" width="30px" height="30px" />
          <div className="counter">2</div>
        </div>
      </div>
    </div>
  )
}

export default Header
