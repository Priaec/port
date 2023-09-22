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

  submit = () =>{

  }


  header = () =>{
    return(
      <div className="contact-header">
        <p className="contact-title">Contact Form</p>
      </div>
    );
  }

  container = () =>{
    return(
      <div className="contact-container">
        <form id='contact-form' className="contact-form">
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
          <input className='contact-input'
            type="text"
            placeholder="Message"
            name="message"
            onChange={event => this.setState({message: event.target.value})}
            required>
          </input>
        </form>
      </div>
    );
  }

  footer = () =>{
    return(
      <div className="contact-footer">
        <button onClick={this.submit} className="contact-button">Submit</button>
      </div>
    );
  }

  render(){
    return(
      <div className="contact-wrapper">
        <this.header/>
        <this.container/>
        <this.footer/>
      </div>
    );
  }
}

export default Contact;
