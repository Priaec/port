import React from 'react';
import linkedIn from '../assets/linkedIn.png'
import github from '../assets/Github.png'
import '../styles/Footer.css'

class Footer extends React.Component{

  goToGH = () =>{
    window.open('https://github.com/Priaec', '_blank');
  }

  render(){
    return (
      <div className='footer-wrapper'>
        <div className='footer-container'>
          <div className='footer-title-container'>
            <p className='footer-title'>Social Media References</p>
          </div>
          <div className='footer-contact-container'>
            <p className='footer-contact'>joshcohen8020@gmail.com</p>
            <p className='footer-contact'>(818)-602-6657</p>
            <p className='footer-contact-button'>Contact</p>
          </div>
          <div className='footer-img-wrapper'>
            <div className='footer-img-container'>
              <img className='footer-img' src={linkedIn} alt=''/>
            </div>
            <div className='footer-img-container'>
              <img className='footer-img' onClick={this.goToGH} src={github} alt=''/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
