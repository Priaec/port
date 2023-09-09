import React from 'react';
import Colors from '../assets/Colors.json'
import '../styles/HeaderBar.css'

class HeaderBar extends React.Component{
  render(){
    return (
      <div className='headerBar-container'>
        <p className='headerBar-button-left-element' style={{color: Colors.darkBackground}}>Joshua Cohen</p>
        <p className='headerBar-button' style={{color: Colors.darkBackground}}>About Me</p>
        <p className='headerBar-button' style={{color: Colors.darkBackground}}>Projects</p>
        <p className='headerBar-button' style={{color: Colors.darkBackground}}>Interests</p>
        <p id='contact-button' className='headerBar-button'>Contact</p>
      </div>
    );
  }
}

export default HeaderBar;
