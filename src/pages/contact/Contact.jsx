import React from 'react';
import './contact.scss';
import Email from "../../images/email.svg";

const Contact = () => {
  return (
    <div className='contact'>
      <div className="container">
        <div className="contactHeader">
          <p>Contact Us</p>
          <h1>Contact For Any Query</h1>
        </div>
        <div className="contactGroup">
          <div className="contactInfo">
            <div className="contactIcon"></div>
            <div className="contactText">
              <h3>Address</h3>
              <p>123 Street, Halifax, NS, Canada</p>
            </div>
          </div>
          <div className="contactInfo">
            <div className="contactIcon"></div>
            <div className="contactText">
              <h3>Call Us</h3>
              <p>123-456-7890</p>
            </div>
          </div>
          <div className="contactInfo">
            <div className="contactIcon"></div>
            <div className="contactText">
              <h3>Email Us</h3>
              <p>ksong1052@gmail.com</p>
            </div>
          </div>
          <div className="contactInfo">
            <div className="contactIcon"></div>
            <div className="contactText">
              <h3>Follow Us</h3>
              <div className="contactSocial">
                <button>twitter</button>
                <button>facebook</button>
                <button>youtube</button>
                <button>linkedIn</button>
              </div>
            </div>
          </div>          
        </div>
        <div className="contactForm">
          <div className="googleMap">
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1600663868074!5m2!1sen!2sbd" 
                frameborder="0" 
                style={{border:"0"}} 
                allowfullscreen="" 
                aria-hidden="false" 
                tabindex="0"
                title="gMapFrame"
                className='gMapFrame'
              ></iframe> */}
              <img src={Email} alt="" className="gMapFrame" />
          </div>
          <form className='messageForm'>
            <input type="text" className="mInput" id="mName" name="mName" placeholder="Name" required />
            <input type="email" className="mInput" id="mEmail" name="mEmail" placeholder="Email" required />
            <input type="text" className="mInput" id="mSubject" name="mSubject" placeholder="Subject" required />
            <textarea  className="mMessage" id="mMessage" name="mMessage" placeholder="Message" required />
            <div>
                <button className="mSubmit" type="submit" id="sendMessageButton">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
