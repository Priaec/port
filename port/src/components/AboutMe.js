import React from 'react';
import Colors from '../assets/Colors.json'
import '../styles/AboutMe.css'

class Home extends React.Component{
  render(){
    return (
      <div className='aboutMe-container' style={{backgroundColor: Colors.lightBackground}}>
        <p>About Me</p>
        <p>Making a difference with REST APIs, Deep Learning Models,
          and interactive User Interfaces. I have graduated from
          California State University Northridge, with a Bachelors
          in Computer Science. I currently am aspiring to be a major
          contributor in the tech Industry. I am ambitious to leverage
          the newest technologies that are relevant.
        </p>
      </div>
    );
  }
}

export default Home;
