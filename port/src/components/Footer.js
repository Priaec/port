import React from 'react';
import linkedIn from '../assets/linkedIn.png'
import github from '../assets/Github.png'
import '../styles/Footer.css'

class Footer extends React.Component{
  render(){
    return (
      <div className='footer-wrapper'>
        <div className='footer-container'>
          <p>Social Media References</p>
          <div className='footer-img-wrapper'>
            <div className='footer-img-container'>
              <img className='footer-img' src={linkedIn} alt=''/>
            </div>
            <div className='footer-img-container'>
              <img className='footer-img' src={github} alt=''/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
