import React from "react";
import '../styles/Contact.css';

class Contact extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      message: ''
    }
  }

  componentDidMount(){

  }

  header = () =>{

  }

  container = () =>{

  }

  footer = () =>{

  }

  render(){
    return(
      <div className="contact-wrapper">
        <div className="contact-header">
          <p className="contact-title">Contact Form</p>
        </div>
        <div className="contact-container">
          <form className="contact-form">
            <input className='contact-input'
              type="text"
              placeholder="First Name"
              name="firstname"
              onChange={event => this.setState({firstName: event.target.value})}
              required>
            </input>
            <input className='contact-input'
              type="text"
              placeholder="Last Name"
              name="lastname"
              onChange={event => this.setState({lastName: event.target.value})}
              required>
            </input>
            <input className='contact-input'
              type="email"
              placeholder="Email Address"
              name="email"
              onChange={event => this.setState({email: event.target.value})}
              required>
            </input>
            <input className='contact-input'
              type="tel"
              placeholder="Phone Number"
              name="Phone Number"
              onChange={event => this.setState({phoneNumber: event.target.value})}
              required>
            </input>
          </form>
        </div>
        <div className="contact-footer">
          <button className="contact-button">Submit</button>
        </div>
      </div>
    );
  }
}

export default Contact;
