import React, { Component } from 'react';
import '../styles/Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };
  }

  toggleFlip = () => {
    this.setState({ isFlipped: !this.state.isFlipped });
  };

  render() {
    return (
      <div className="card" onClick={this.toggleFlip}>
        <div className={`card-face card-front ${this.state.isFlipped ? 'flipped' : ''}`}>
          {this.props.frontContent}
        </div>
        <div className={`card-face card-back ${this.state.isFlipped ? 'flipped' : ''}`}>
          {this.props.backContent}
        </div>
      </div>
    );
  }
}

export default Card;
