import React from 'react';
import '../styles/Projects.css';
import Project from './Project';

class Projects extends React.Component{
  render(){
    return (
      <div className='projects-wrapper'>
      <Project/>
      <Project/>
      <Project/>
      <Project/>
      </div>
    );
  }
}

export default Projects;
