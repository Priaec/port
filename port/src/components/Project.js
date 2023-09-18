import React from 'react';
import '../styles/Project.css';

class Project extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isVisible: false,
      isBouncing: false
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
    concepts.forEach((concept)=>{
      renderedConcepts.push(<li className='project-concept'>{concept}</li>)
    })
    return(<ul className='project-concepts'>{renderedConcepts}</ul>)
  }

  render(){
    const { isVisible, isBouncing } = this.state;
    const { project } = this.props;
    return (
      <div className={`project-wrapper ${isBouncing ? 'bounce': ''}`}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
        <div className={`scroll-text ${isVisible ? 'visible' : ''}`}>
          <p className='project-title'>{project.name}</p>
          <div className='project-container'>
            <p className='project-description'>{project.description}</p>
            <this.conceptList concepts={project.concepts}/>
          </div>
        </div>
              <p className='projectGallery-button'>Gallery</p>
      </div>
    );
  }
}

export default Project;
