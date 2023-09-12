import React from 'react';
import AnimatedBanner from './AnimatedBanner';

class LandingPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){
    console.log(this.props)
    setTimeout(()=>{
      this.toWeb()
    }, 3000)
  }

  toWeb = () =>{
    console.log(this.props)
    const { history } = this.props;
    history.push('/main');
  }

  render(){
    return (
      <>
        <AnimatedBanner/>
      </>
    );
  }
}

export default LandingPage;
