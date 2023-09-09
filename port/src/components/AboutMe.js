import React from 'react';
import '../styles/AboutMe.css'
import Interests from './Interests';

class AboutMe extends React.Component{
  render(){
    return (
      <div className='aboutMe-wrapper'>
        <p className='aboutMe-title text-white'>About Me</p>
        <div className='aboutMe-container'>
          <p>Making a difference with REST APIs, Deep Learning Models,
            and interactive User Interfaces. I have graduated from
            California State University Northridge, with a Bachelors
            in Computer Science. I currently am aspiring to be a major
            contributor in the tech Industry. I am ambitious to leverage
            the newest technologies that are relevant.
          </p>
          <p>Making a difference with REST APIs, Deep Learning Models,
            and interactive User Interfaces. I have graduated from
            California State University Northridge, with a Bachelors
            in Computer Science. I currently am aspiring to be a major
            contributor in the tech Industry. I am ambitious to leverage
            the newest technologies that are relevant.
          </p>
        </div>
        <p>Making a difference with REST APIs, Deep Learning Models,
          and interactive User Interfaces. I have graduated from
          California State University Northridge, with a Bachelors
          in Computer Science. I currently am aspiring to be a major
          contributor in the tech Industry. I am ambitious to leverage
          the newest technologies that are relevant.
        </p>
        <p>Making a difference with REST APIs, Deep Learning Models,
          and interactive User Interfaces. I have graduated from
          California State University Northridge, with a Bachelors
          in Computer Science. I currently am aspiring to be a major
          contributor in the tech Industry. I am ambitious to leverage
          the newest technologies that are relevant.
        </p>
        <Interests/>
      </div>
    );
  }
}

export default AboutMe;
