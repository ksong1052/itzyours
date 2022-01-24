import React from 'react';
import './main.scss';
import womenBg from "../../images/womens.jpg";

const Main = () => {
  return (
    <div className='main'>
      <div className="inner" style={{backgroundImage: `url(${womenBg})`}}>
        <div className="title">          
          <h2><i>Wanna make a perfect day?</i></h2>
        </div>
      </div>
    </div>
  )
}

export default Main
