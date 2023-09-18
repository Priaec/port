import React from 'react';
import '../styles/HeaderBar.css'

class HeaderBar extends React.Component{
  render(){
    return (
      <div className='headerBar-container'>
        <p className='headerBar-button-left-element'>Joshua Cohen</p>
        <p className='headerBar-button' onClick={this.props.scrollToAboutMe}>About Me</p>
        <p className='headerBar-button' onClick={this.props.scrollToProjects}>Projects</p>
        <p className='headerBar-button'>Interests</p>
        <p id='contact-button' className='headerBar-button'>Contact</p>
      </div>
    );
  }
}

export default HeaderBar;
