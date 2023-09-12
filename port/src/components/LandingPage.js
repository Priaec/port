import React from 'react';
import logo from '../assets/Logo.png';
import '../styles/LandingPage.css'

class LandingPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){
    console.log(this.props)
    setTimeout(()=>{
      this.toWeb()
    }, 1400)
  }

  toWeb = () =>{
    console.log(this.props)
    const { history } = this.props;
    history.push('/main');
  }

  render(){
    return (
      <div className='landingPage-wrapper'>
        <img src={logo} alt='' className='landingPage-logo'/>
      </div>
    );
  }
}

export default LandingPage;
