import React from 'react';
import ReactDOM from 'react-dom';

class Time extends React.Component{
  constructor() {
    super();
    this.state = { date: new Date()};

  }
  render() {
    const date = this.state.date.toString();
    return (
      <div>
        <li>{date}</li>
      </div>
    );
  }
}

export default Time;
