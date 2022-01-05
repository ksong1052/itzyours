import React from 'react'
import './footer.scss';
import BG from '../../images/bg.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="item">
        <img src={BG} alt="" width="550" height="600" />
      </div>
      <div className="item">
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
