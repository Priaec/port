import React from 'react';
import Popup from './Popup';
import '../styles/Interests.css';
import InterestDetails from './InterestDetails';

class Interests extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isVisible: false,
      trigger: false
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

  updateTrigger = ()=>{
    this.setState({trigger: false})
  }

  render(){
    const {isVisible, trigger} = this.state;
    return (
      <div id='interests-wrapper' className={`scroll-text ${isVisible ? 'visible' : ''}`}>
        <p className='interests-title'>- Interests</p>
        <div id='interests-container'>
          <p className='interests-content'>Making a difference with REST APIs, Deep Learning Models,
            and interactive User Interfaces. I have graduated from
            California State University Northridge, with a Bachelors
            in Computer Science. I currently am aspiring to be a major
            contributor in the tech Industry. I am ambitious to leverage
            the newest technologies that are relevant.
          </p>
          <button className='interests-button'
            onClick={()=>{this.setState({trigger: true})}}
          >Learn More
          </button>
        </div>
        <Popup trigger={trigger} updateTrigger={this.updateTrigger} component={<InterestDetails/>}></Popup>
      </div>
    );
  }
}

export default Interests;
