import React from 'react';
import './home.scss';
import Directory from '../../components/directory/Directory';
import Contact from '../../pages/contact/Contact';

const Home = () => {
  return (
    <div className="home">  
      <Directory />  
      <Contact />    
    </div>
  )
}

export default Home
