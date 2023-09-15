import React from 'react';
import '../styles/Stack.css';

class Stack extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  applicationList = () =>{
    const applicationsList = [];
    const { stack } = this.props;
    stack.applications.forEach((application)=>{
      applicationsList.push(<li>{application}</li>)
    })
    return (
      <div>
        <p>Applications</p>
        <ul className='stack-list'>{applicationsList}</ul>
      </div>
    )
  }

  frameworkList = () =>{
    const frameworkList = [];
    const { stack } = this.props;
    stack.frameworks.forEach((framework)=>{
      frameworkList.push(<li>{framework}</li>)
    })
    return (
    <div>
      <p>Frameworks</p>
      <ul className='stack-list'>{frameworkList}</ul>
    </div>
    )
  }

  render(){
    const { stack } = this.props;
    return (
      <div className='stack-wrapper'>
        <p className='stack-title stack-font'>{stack.language}</p>
        <img className='stack-img' src={stack.img} alt=''/>
        <div className='stack-container'>
          <this.applicationList/>
          <this.frameworkList/>
        </div>
      </div>
    );
  }
}

export default Stack;
