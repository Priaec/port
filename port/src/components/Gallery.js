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
    const hasImages = (images.length && images.length > 1)
    if(!Array.isArray(images))
      return(<></>)
    else{
    return(
      <div className="gallery-wrapper">
        <div className="gallery-container">
          {hasImages && (
            <button className='gallery-button' onClick={()=> this.toggleIndex(index - 1)}>{`<`}</button>
          )}
          <img className='gallery-img' src={images[index]} alt=''/>
          {hasImages && (
            <button className="gallery-button" onClick={()=> this.toggleIndex(index + 1)}>{`>`}</button>
          )}
        </div>
      </div>
      );
    }
  }
}

export default Gallery;
