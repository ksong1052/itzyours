import React from 'react';
import './home.scss';
import { HomePageContainer } from './home.styles';
import Main from '../main/Main';
import Directory from '../../components/directory/Directory';
// import Contact from '../../pages/contact/Contact';
import Event from '../../pages/event/Event';

const Home = () => {
  return (
    <HomePageContainer>  
      <Main />
      {/* <div className="homeTitle">
        <h2>Products</h2>
      </div> */}

      {/* <Directory />   */}
      
      {/* <div className="homeContact">
        <Contact />
      </div>           */}
      <Event />
    </HomePageContainer>
  )
}

export default Home
