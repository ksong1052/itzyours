/* eslint-disable */ 

import React from 'react'
import './event.scss';
import Front from '../../images/front.png';
import Back from '../../images/back_sale.png';
// import Back from '../../images/sale1.jpg';
import Shopping1 from '../../images/shopping7.jpg';
import Shopping2 from '../../images/shopping2.jpg';

const Event = () => {
  return (
    <>
      <section className="favorite-move1 scroll-spy" style={{backgroundImage: `url(${Shopping1})`}}>
        <div className="inner">

          <div className="text-group">
            <div className="title back-to-position to-right delay-0">
              Pick!<br /> what you want
            </div>
            <div className="description back-to-position to-right delay-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nemo mollitia amet consequatur culpa quae.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nemo mollitia amet consequatur culpa quae.
            </div>
            <div className="more back-to-position to-right delay-2">
              <a href="#" className="btn btn--black">Detail</a>
            </div>
          </div>

        </div>
      </section>

      <section className="favorite-move2" style={{backgroundImage: `url(${Shopping2})`}}>
        <div className="inner">

          <div className="medal">
            <div className="front">
              <img src={Front} alt="" />
            </div>
            <div className="back">
              <img src={Back} alt="" className='fm2BackImg'/>
              <a href="#" className="btn">Location</a>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Event
