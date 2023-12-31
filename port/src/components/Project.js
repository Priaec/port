import React from 'react';
import '../styles/Project.css';
import ProjectDetails from './ProjectDetails';
import Popup from './Popup';
import Gallery from './Gallery';

class Project extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isVisible: false,
      isBouncing: false,
      trigger: false,
      galleryTrigger: false,
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () =>{
    if (window.scrollY > 300)
      this.setState({ isVisible: true });
    else
      this.setState({ isVisible: false });
  }

  handleMouseEnter = () =>{
    this.setState({ isBouncing: true });
  }

  handleMouseLeave = () =>{
    this.setState({ isBouncing: false });
  }

  conceptList = ({concepts}) =>{
    const renderedConcepts = []
    concepts.forEach((concept, index)=>{
      if(index > 4)
        return;
      renderedConcepts.push(<li className='project-concept'>{concept}</li>)
    })
    return(
      <ul className='project-concepts'>
        {renderedConcepts.slice(0, 4).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        {renderedConcepts.length > 4 && <li className='project-concept'>...</li>}
      </ul>
    )
  }

  updateTrigger = ()=>{
    this.setState({trigger: false})
  }

  updateGalleryTrigger = ()=>{
    this.setState({galleryTrigger: false})
  }

  render(){
    const { isVisible, isBouncing, trigger, galleryTrigger} = this.state;
    const { project } = this.props;
    const hasImages = project && project.hasOwnProperty('images');
    return (
      <div className={`project-wrapper ${isBouncing ? 'bounce': ''} scroll-text ${isVisible ? 'visible' : ''}`}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
        <p className='project-title'>{project.name}</p>
        <div className='project-container'>
          <p className='project-description'>{project.description}</p>
          <this.conceptList concepts={project.concepts}/>
        </div>
        <div className='project-footer'>
          {hasImages && (
            <button onClick={()=>{this.setState({galleryTrigger: true})}} className='project-button'>Gallery</button>
          )}
          <button onClick={()=>{this.setState({trigger: true})}} className='project-button'>Learn More</button>
        </div>
        <Popup trigger={trigger} updateTrigger={this.updateTrigger} component={<ProjectDetails project={project}/>}></Popup>
        <Popup trigger={galleryTrigger} updateTrigger={this.updateGalleryTrigger} component={<Gallery images={project.images} height={90}/>} project={project}></Popup>
      </div>
    );
  }
}

export default Project;
