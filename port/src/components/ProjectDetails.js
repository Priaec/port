import React from "react";
import '../styles/ProjectDetails.css';

class ProjectDetails extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  header = () =>{
    const { project } = this.props;
    return(
      <div className="projectDetails-header">
        <div className="projectDetails-subHeader">
          <p className="projectDetails-title">{project.name}</p>
        </div>
        <div className="projectDetails-subHeader">
          <p>Start: {project.startDate}</p>
          <p>End: {project.endDate}</p>
        </div>
      </div>
    );
  }

  container = ({project}) =>{
    return(
      <div className="projectDetails-container">
        <p>{project.description}</p>
        <this.conceptList concepts={project.concepts}/>
      </div>
    );
  }

  conceptList = ({concepts}) =>{
    const renderedConcepts = []
    concepts.forEach((concept, index)=>{
      renderedConcepts.push(<li className='project-concept'>{concept}</li>)
    })
    return(
      <>
        <p className="projectDetails-subTitle">Concepts</p>
        <ul className='projectDetails-concepts'>
          {renderedConcepts.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </>
    )
  }

  render(){
    const { project } = this.props;
    return (
      <>
        <this.header/>
        <this.container project={project}/>
      </>
    );
  }
}

export default ProjectDetails;
