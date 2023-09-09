import React from 'react';
import Colors from '../assets/Colors.json'
import '../styles/HeaderBar.css'

class HeaderBar extends React.Component{
  render(){
    return (
      <div className='headerBar-container' style={{backgroundColor: Colors.darkBackground}}>
        <p style={{color: Colors.title}}>Joshua Cohen</p>
        <button className='headerBar-button' style={{backgroundColor: Colors.darkBackground}}>About Me</button>
        <button className='headerBar-button' style={{backgroundColor: Colors.darkBackground}}>Projects</button>
        <button className='headerBar-button' style={{backgroundColor: Colors.darkBackground}}>Interests</button>
        <button id='contact-button' className='headerBar-button' style={{backgroundColor: Colors.button}}>Contact</button>
      </div>
    );
  }
}

export default HeaderBar;
