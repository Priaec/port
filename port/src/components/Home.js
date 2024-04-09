import React from 'react';
import HeaderBar from './HeaderBar';
import AboutMe from './AboutMe';
import Footer from './Footer';
import TechStack from './TechStack';
import Projects from './Projects';
import AboutSite from './AboutSite';
import Contact from './Contact';
import '../styles/Home.css';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
    this.aboutMeRef = React.createRef();
    this.projectsRef = React.createRef();
  }

  //scroll down to AboutMe Section
  scrollToAboutMe = () =>{
    if(this.aboutMeRef.current){
      this.aboutMeRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  //scroll down to Projects Section
  scrollToProjects = () =>{
    if(this.projectsRef.current){
      this.projectsRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  render(){
    return (
      <div className='container'>
        <HeaderBar scrollAboutToMe={this.scrollToAboutMe} scrollToProjects={this.scrollToProjects}/>
        <AboutMe aboutMeRef={this.aboutMeRef}/>
        <AboutSite/>
        <TechStack/>
        <Projects props={this.props} projectsRef={this.projectsRef}/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
