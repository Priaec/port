import React from 'react';
import logo from '../assets/Logo.png';

class AnimatedBanner extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){

  }

  render(){
    return (
      <div>
        <img src={logo} alt=''/>
      </div>
    );
  }
}

export default AnimatedBanner;
