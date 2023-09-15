import React from 'react';
import '../styles/AboutMe.css'
import About from '../assets/AboutMe.json';
import Interests from './Interests';

class AboutMe extends React.Component{
  render(){
    return (
      <div className='aboutMe-wrapper'>
        <p className='aboutMe-title text-white'>{About.title}</p>
        <div className='aboutMe-container'>
          <p>{About.description}</p>
          <p>{About.desctiption2}</p>
        </div>
        <Interests/>
      </div>
    );
  }
}

export default AboutMe;
