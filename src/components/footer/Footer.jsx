import React from 'react'
import './footer.scss';
// import BG from '../../images/bg.png';
import Shopping from '../../images/shopping.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="item1">
        <img src={Shopping} alt="" width="300" height="330" />
      </div>
      <div className="item2">
        <div className="card">
          <h2 className="motto">
            OH YES, WE DID, MAKE A PERFECT.            
          </h2>
        </div>
        <div className="card">
          <h1 className="title">FIND OUR STORE</h1>
          <p className="text">
            1234 King Road #301.
            <br /> Halifax, 12345
            <br /> (902) 123-4567
          </p>
          <p className="text">
            1234 Queen Road #302.
            <br /> Halifax, 12345
            <br /> (902) 123-4568
          </p>
          <p className="text">
            1234 Larry Road #303.
            <br /> Halifax, 12345
            <br /> (902) 123-4569
          </p>          
        </div>
        <div className="card">
          <h1 className="title">WORKING HOURS</h1>
          <p className="text">
            MONDAY UNTIL FRIDAY 
            <br /> 11:00 - 20:00
          </p>
          <p className="text">
            SATURDAY - SUNDAY 
            <br /> 11:00 - 18:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
