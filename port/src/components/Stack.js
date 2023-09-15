import React from 'react';
import '../styles/Stack.css';
import HideShow from '../assets/HideShow.png';

class Stack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAllApplications: false,
      showAllFrameWorks: false
    };
  }

  toggleShowAllApplications = () => {
    this.setState((prevState) => ({
      showAllApplications: !prevState.showAllApplications,
    }));
  };

  applicationList = () => {
    const { stack } = this.props;
    const { showAllApplications } = this.state;
    const visibleApplications = showAllApplications
      ? stack.applications
      : stack.applications.slice(0, 5);
    const applicationsList = visibleApplications.map((application, index) => (
      <li key={index}>{application}</li>
    ));
    return (
      <div>
        <p>Applications</p>
        <ul className='stack-list'>{applicationsList}</ul>
        {stack.applications.length > 5 && (
          <button className='stack-button' onClick={this.toggleShowAllApplications}>
            {showAllApplications ? <img className='stack-img' src={HideShow} alt='Show More'/> : <img className='stack-img' src={HideShow} alt='Show Less'/> }
          </button>
        )}
      </div>
    );
  };

  toggleShowAllFrameWorks = () => {
    this.setState((prevState) => ({
      showAllFrameWorks: !prevState.showAllFrameWorks,
    }));
  };

  frameworkList = () => {
    const { stack } = this.props;
    const { showAllFrameWorks } = this.state;
    const visibleFrameworks = showAllFrameWorks
      ? stack.frameworks
      : stack.frameworks.slice(0, 5);
    const frameworkList = visibleFrameworks.map((framework, index) => (
      <li key={index}>{framework}</li>
    ));
    return (
      <div>
        <p>Frameworks</p>
        <ul className='stack-list'>{frameworkList}</ul>
        {stack.frameworks.length > 5 && (
          <button className='stack-button' onClick={this.toggleShowAllFrameWorks}>
            {showAllFrameWorks ? <img className='stack-img' src={HideShow} alt='Show More'/> : <img className='stack-img' src={HideShow} alt='Show Less'/> }
          </button>
        )}
      </div>
    );
  };

  render() {
    const { stack } = this.props;
    return (
      <div className='stack-wrapper'>
        <p className='stack-title stack-font'>{stack.language}</p>
        <div className='stack-container'>
          {this.applicationList()}
          {this.frameworkList()}
        </div>
      </div>
    );
  }
}

export default Stack;
