import React from 'react';
import '../styles/AboutMe.css'
import About from '../assets/AboutMe.json';
import Interests from './Interests';
import Gallery from './Gallery';

class AboutMe extends React.Component{
  render(){
    return (
      <div className='aboutMe-wrapper'>
        <div className='aboutMe-header'>
          <p className='aboutMe-title text-white'>{About.title}</p>
        </div>
        <div className='aboutMe-container'>
          <p className='aboutMe-content'>{About.description}</p>
          <Gallery images={['/GradPicture.png', '/Logo.png']}/>
        </div>
        <Interests/>
      </div>
    );
  }
}

export default AboutMe;
