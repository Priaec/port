import React, { Component } from 'react';
import Card from './Card';

class CardContainer extends Component {
  render() {
    const { front, back } = this.props;
    return (
      <div className="card-container">
        <Card frontContent={front} backContent={back} />
      </div>
    );
  }
}

export default CardContainer;
