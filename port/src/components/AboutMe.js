import React from 'react';
import '../styles/AboutMe.css'
import About from '../assets/AboutMe.json';
import Interests from './Interests';
import Gallery from './Gallery';
//import CardContainer from './CardContainer';


class AboutMe extends React.Component{
  render(){
    return (
      <div className='aboutMe-wrapper'>
        <div className='aboutMe-header'>
          <p className='aboutMe-title text-white'>{About.title}</p>
        </div>
        <div className='aboutMe-container'>
          <p className='aboutMe-content'>{About.description}</p>
          <Gallery images={['/GradPicture.png']}height={window.innerWidth < `400px` ? 50: `fit-content`}/>
        </div>
        <Interests/>
      </div>
    );
  }
}

export default AboutMe;

//<CardContainer front={About.description} back={'Back Content'}/>
