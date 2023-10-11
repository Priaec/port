import React from 'react';
import '../styles/TechStack.css';
import TechList from '../assets/TechStack.json';
import Stack from './Stack';
import TechStackList from './TechStackList';
import SkillChart from './SkillChart';

class TechStack extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isVisible: false
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

  techStackList = () =>{
    const techStacks = [];
    TechList.forEach((stack)=>{
      techStacks.push(<li className='techStack-item'><Stack stack={stack}/></li>)
    })
    return(<ul className='techStack-list'>{techStacks}</ul>)
  }

  navigateToRecentWorks = () => {
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
      projectsContainer.scrollIntoView({ behavior: 'smooth' });
    }
  };


  render(){
    const {isVisible} = this.state;
    return (
      <div id='techstack-wrapper'>
        <div className={`scroll-text ${isVisible ? 'visible' : ''}`}>
          <div className='techstack-header'>
            <div className='techstack-leftHeader'>
              <p className='techstack-title'>TechStack</p>
              <button className='techstack-button' onClick={this.navigateToRecentWorks}>Recent Works</button>
            </div>
            <SkillChart/>
          </div>
          <div className='techstack-container'>
            <TechStackList/>
          </div>
        </div>
      </div>
    );
  }
}

export default TechStack;
