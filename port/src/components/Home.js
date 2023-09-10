import React from 'react';
import HeaderBar from './HeaderBar';
import AboutMe from './AboutMe';
import Footer from './Footer';
import TechStack from './TechStack';
import '../styles/Home.css'

class Home extends React.Component{
  render(){
    return (
      <div className='container'>
        <HeaderBar/>
        <AboutMe/>
        <TechStack/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
