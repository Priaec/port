import React from 'react';
import Colors from '../assets/Colors.json'
import '../styles/Interests.css'

class Interests extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isVisible: false
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () =>{
    if (window.scrollY > 100)
      this.setState({ isVisible: true });
    else
      this.setState({ isVisible: false });
  }

  render(){
    const {isVisible} = this.state;
    return (
      <div className={`scroll-text ${isVisible ? 'visible' : ''}`}>
        <p>Interests</p>
        <p>Making a difference with REST APIs, Deep Learning Models,
          and interactive User Interfaces. I have graduated from
          California State University Northridge, with a Bachelors
          in Computer Science. I currently am aspiring to be a major
          contributor in the tech Industry. I am ambitious to leverage
          the newest technologies that are relevant.
        </p>
      </div>
    );
  }
}

export default Interests;
