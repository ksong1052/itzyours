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
            OH YES, WE DID, THE DANIEL PIZZA, WELL BAKED SLICE OF PIZZA.            
          </h2>
        </div>
        <div className="card">
          <h1 className="title">FIND OUR RESTAURANTS</h1>
          <p className="text">
            1654 R. Don Road #304.
            <br /> Halifax, 12345
            <br /> (82) 123-4567
          </p>
          <p className="text">
            1654 R. Don Road #304.
            <br /> Halifax, 12345
            <br /> (82) 123-4567
          </p>
          <p className="text">
            1654 R. Don Road #304.
            <br /> Halifax, 12345
            <br /> (82) 123-4567
          </p>          
        </div>
        <div className="card">
          <h1 className="title">WORKING HOURS</h1>
          <p className="text">
            MONDAY UNTIL FRIDAY 
            <br /> 9:00 - 22:00
          </p>
          <p className="text">
            SATURDAY - SUNDAY 
            <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
