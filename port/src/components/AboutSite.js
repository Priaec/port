import React from "react";
import Chat from "./Chat";
import '../styles/AboutSite.css'

class AboutSite extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () =>{
    if (window.scrollY > 200)
      this.setState({ isVisible: true });
    else
      this.setState({ isVisible: false });
  }


  container = () =>{
    return(
      <div className="aboutSite-container">
        <h2 className="aboutSite-title">This Site Was Deployed on AWS</h2>
        <Chat/>
        <div className="aboutSite-linkContainer">
          <p className="">
            {"Learn how to deploy a website: "}
            <a ctarget="_blank" rel="noreferrer" href="https://aws.amazon.com/pm/ec2">
              here
            </a>
          </p>
        </div>
      </div>
    )
  }

  render(){
    const { isVisible } = this.state;
    return(
    <div className={`scroll-text ${isVisible ? 'visible' : ''} aboutSite-wrapper`}>
      <this.container/>
    </div>)
  }
}

export default AboutSite;
