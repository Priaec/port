import React from 'react';
import '../styles/HeaderBar.css'
import Popup from './Popup';
import Contact from './Contact';

class HeaderBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      trigger: false
    }
  }

  openPopup = ()=>{
    this.setState({trigger: true})
  }

  updateTrigger = ()=>{
    this.setState({trigger: false})
  }

  render(){
    const { trigger } = this.state;
    return (
      <div className='headerBar-container'>
        <p className='headerBar-button-left-element'>Joshua Cohen</p>
        <a className='headerBar-button' href='#interests-wrapper'>Interests</a>
        <a className='headerBar-button' href='#techstack-wrapper'>TechStack</a>
        <a className='headerBar-button' href='#projects-container'>Projects</a>
        <p className='headerBar-button' onClick={this.openPopup}>Contact</p>
        <Popup component={<Contact/>} trigger={trigger} updateTrigger={this.updateTrigger}></Popup>
      </div>
    );
  }
}

export default HeaderBar;
