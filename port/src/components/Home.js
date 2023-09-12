import React from 'react';
import HeaderBar from './HeaderBar';
import AboutMe from './AboutMe';
import Footer from './Footer';
import TechStack from './TechStack';
import Projects from './Projects';
import '../styles/Home.css';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return (
      <div className='container'>
        <HeaderBar/>
        <AboutMe/>
        <TechStack/>
        <Projects/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
