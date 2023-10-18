import React from "react";
import '../styles/Contact.css';
import axios from 'axios';
import ReactLoading from 'react-loading';
import ReCAPTCHA from 'react-google-recaptcha';
import { isPhoneNumber } from "../handlers/formHandler";

class Contact extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      recaptchaToken: null,
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      message: '',
      errMsg: '',
      formState: ''
    }
  }

  handleErr = (err) =>{
    if(err.message)
      err = err.message
    this.setState({
      formState: '',
      errMsg: err
    });
  }

  handleCaptcha = async()=>{
    const { recaptchaToken } = this.state;
    const url = `${process.env.REACT_APP_API_URL}/verifyUser`;
    const data = { recaptchaToken: recaptchaToken };
    await axios.post(url, data)
      .then(response=>{
        console.log(response)
        if(response.status !== 200){
          throw new Error(`Captcha Verification Failed`);
        }
      }).catch((err)=>{
        this.handleErr(err);
      })
  }

  //validate all values of the form //TODO
  validateForm = () =>{
    const { firstName, lastName, phoneNumber, email, message } = this.state;
    if(firstName === '' || lastName === '' || phoneNumber === '' || email === '' || message === '')
      return 'Missing 1 or more fields';
    if(!isPhoneNumber(phoneNumber))
      return 'Invalid Phone Number';
  }

  submit = async() =>{
    const { recaptchaToken } = this.state;
    if(!recaptchaToken)
      return this.handleErr('Please complete the captcha');
    const formError = this.validateForm();
    if(formError)
      return this.handleErr(formError);
    try{
      await this.handleCaptcha();
    }catch(err){
      console.log(err)
      return this.handleErr(err);
    }
    this.setState({
      formState: 'loading'
    })
    const url = `${process.env.REACT_APP_API_URL}/send-email`;
    const { email, message } = this.state;
    const data = {
      recaptchaToken: recaptchaToken,
      from: email,
      message: message
    }
    await axios.post(url, data)
      .then(response=>{
        this.setState({
          formState: 'success'
        })
      }).catch((err)=>{
        console.log('from email')
        this.handleErr(err)
      })
    return
  }

  handleRecaptchaChange = (value) => {
    this.setState({recaptchaToken: value})
  };

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
    const { errMsg } = this.state;
    return(
      <div className="contact-footer">
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_RECAP_SITE}
          onChange={this.handleRecaptchaChange}
        />
        <button onClick={this.submit} className="contact-button">Submit</button>
        <p className="contact-msg">{errMsg}</p>
      </div>
    );
  }

  render(){
    const { formState } = this.state;
    if(formState === ''){
      return(
        <div className="contact-wrapper">
          <this.header/>
          <this.container/>
          <this.footer/>
        </div>
      );
    }else if(formState === 'loading'){
      return(
      <div className="contact-wrapper">
        <ReactLoading type="spin" color="#7f00ff"/>
      </div>
      );
    }
    else{
      return(
        <div className="contact-wrapper">
          <this.header/>
          <p className="contact-success">Email Sent Successfully</p>
        </div>
      );
    }
  }
}

export default Contact;
