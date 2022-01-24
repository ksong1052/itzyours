import React from 'react';
import './home.scss';
import { HomePageContainer } from './home.styles';
import Directory from '../../components/directory/Directory';
// import Contact from '../../pages/contact/Contact';

const Home = () => {
  return (
    <HomePageContainer>  
      <Directory />  
      {/* <Contact />     */}
    </HomePageContainer>
  )
}

export default Home
