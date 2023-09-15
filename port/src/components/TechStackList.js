import React from 'react';
import TechList from '../assets/TechStack.json';
import Stack from './Stack';

class TechStackList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      techStacks: [],
      showGrid: false
    }
  }

  componentDidMount(){
    const techStacks = [];
    TechList.forEach((stack)=>{
      techStacks.push(<li className='techStack-item'><Stack stack={stack}/></li>)
    })
    this.setState({
      techStacks: techStacks
    })
  }

  render(){
    return(
      <ul className='techStack-list'>
        {this.state.techStacks}
      </ul>
    );
  }
}

export default TechStackList;
