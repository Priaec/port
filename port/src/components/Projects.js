import React from 'react';
import '../styles/Projects.css';
import Project from './Project';
import ProjectList from '../assets/Projects.json';

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
    const { props } = this.props;
    return (
      <div className='projects-wrapper'>
        <this.projectList/>
      </div>
    );
  }
}

export default Projects;
