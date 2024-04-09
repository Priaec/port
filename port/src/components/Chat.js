import React from "react";
import spinner from '../assets/spinnerSelf.png';
import '../styles/chat.css';

class Chat extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  container = () =>{
    return(
    <div className="chat-container">
      <img className="chat-img" src={spinner} alt=""/>
      <img className="chat-img" src={spinner} alt=""/>
      <img className="chat-img" src={spinner} alt=""/>
    </div>)
  }

  render(){
    return(
    <div className="chat-wrapper">
      <this.container/>
    </div>)
  }
}

export default Chat;
