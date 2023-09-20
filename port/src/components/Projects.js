import React from 'react';
import '../styles/Projects.css';
import Project from './Project';
import ProjectList from '../assets/Projects.json';
import Sphere from './Sphere';

class Projects extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  projectList = () =>{
    const projectList = ProjectList;
    const renderedList = []
    projectList.forEach((project)=>{
      renderedList.push(<Project project={project}/>)
    })
    return(<>{renderedList}</>)
  }

  render(){
    return (
      <div className='projects-wrapper'>
        <div className='projects-header'>
          <p className='projects-title'>Recent Works</p>
          <Sphere color={0x7F00FF} width={400} height={400}/>
        </div>
        <div className='projects-container'>
          <this.projectList/>
        </div>
      </div>
    );
  }
}

export default Projects;
