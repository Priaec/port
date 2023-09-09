import React from 'react';
import Colors from '../assets/Colors.json'
import '../styles/Home.css'
import HeaderBar from './HeaderBar';
import AboutMe from './AboutMe';

class Home extends React.Component{
  render(){
    return (
      <div className='container'>
        <HeaderBar/>
        <AboutMe/>
      </div>
    );
  }
}

export default Home;
