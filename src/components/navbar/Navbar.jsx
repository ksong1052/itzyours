import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo2.png';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

// 🌟 currentUser : mapStateToProps 안에 있는 currentUser값을 가져 오는 것이다.
const Navbar = ({currentUser}) => {
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

// ⭐ state: rootReducer를 가리킴
// store에 있는 state를 component에 전달
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
});

export default connect(
  mapStateToProps
)(Navbar);
