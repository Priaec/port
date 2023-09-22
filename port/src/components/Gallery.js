import React from "react";
import '../styles/Gallery.css';

class Gallery extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      index: 0
    }
  }

  toggleIndex = (value)=>{
    const { images } = this.props;
    if(!Array.isArray(images))
      return
    if(value < 0 || value >= images.length)
      return
    this.setState({index: value})
  }

  render(){
    const { index } = this.state;
    const { images } = this.props;
    return(
      <div className="gallery-wrapper">
        <div className="gallery-container">
          <button className='gallery-button' onClick={()=> this.toggleIndex(index - 1)}>{`<`}</button>
          <img className='gallery-img' src={images[index]} alt=''/>
          <button className="gallery-button" onClick={()=> this.toggleIndex(index + 1)}>{`>`}</button>
        </div>
      </div>
      );
    }
}

export default Gallery;
