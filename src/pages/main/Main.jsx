import React from 'react';
import './main.scss';
import mainBg from "../../images/womens.jpg";

const Main = () => {
  return (
    <div className='main'>
      <div className="inner" style={{backgroundImage: `url(${mainBg})`}}>
        <div className="title">          
          <h2><i>Wanna make a perfect day?</i></h2>
        </div>
      </div>
    </div>
  )
}

export default Main
