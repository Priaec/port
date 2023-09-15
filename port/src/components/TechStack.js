import React from 'react';
import '../styles/TechStack.css';
import TechList from '../assets/TechStack.json';
import Stack from './Stack';
import TechStackList from './TechStackList';

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



  render(){
    const {isVisible} = this.state;
    return (
      <div className='techstack-wrapper'>
        <div className={`scroll-text ${isVisible ? 'visible' : ''}`}>
          <p className='techstack-title'>TechStack</p>
          <div className='techstack-container'>
            <TechStackList/>
          </div>
        </div>
      </div>
    );
  }
}

export default TechStack;
