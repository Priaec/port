import React from "react";
import '../styles/Popup.css'

class Popup extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){
    document.body.style.overflow = 'auto';
  }

  componentWillUnmount(){
    document.body.style.overflow = 'auto';
  }

  render(){
    const { trigger, component, updateTrigger } = this.props;
    return(trigger) ? (
      <div className="popup-element">
        <div className="popup-wrapper">
          <button className="project-button popup-button" onClick={updateTrigger}>X</button>
          {component}
        </div>
      </div>
    ): '';
  }

}

export default Popup;
