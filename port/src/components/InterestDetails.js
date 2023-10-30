import React from "react";
import '../styles/InterestDetails.css';

class InterestDetails extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  header = () =>{
    return(<></>)
  }

  container = () =>{
    return(<></>)
  }

  footer = () =>{
    return(<></>)
  }

  render(){
    return(
      <div className="interestDetails-wrapper">
        <div className="interestDetails-header">
          <p className="interestDetails-title">Interest Details</p>
        </div>
        <div className="interestDetails-container">
          <p className="interestDetails-content">
            A graduate from the esteemed halls of California State University Northridge, armed with a Bachelor's
            in Computer Science, poised to leave an indelible mark on the ever-evolving tech industry. This isn't
            just a career; it's a relentless pursuit of cutting-edge excellence. I'm driven by an unyielding
            ambition to tap into the forefront of technological advancement, where possibilities are limitless,
            and the status quo is merely a stepping stone. My passion lies in wielding the latest tools, like
            REST APIs, as bridges connecting the digital world, and sculpting neural networks with artificial
            intelligence at their core to breathe life into solutions for real-world conundrums.
          </p>
          <ul className="interestDetails-concepts">
            <p>Interest Concepts</p>
            <li className="interestDetails-concept">Artificial Neural Networks</li>
            <li className="interestDetails-concept">Web Development</li>
            <li className="interestDetails-concept">API Solutions</li>
          </ul>
        </div>
        <div className="interestDetails-footer">
        </div>
      </div>
    )
  }
}

export default InterestDetails;
